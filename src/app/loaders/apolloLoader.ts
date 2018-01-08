import { createServer } from 'http';
import { MicroframeworkSettings, MicroframeworkLoader } from 'microframework';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { buildSchema } from '../../interfaces/graphql/RootSchema';

export const apolloLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings && settings.getData('connection')) {
    const expressApp = settings.getData('express_app');
    const ws = createServer(expressApp);
    const schema = buildSchema();

    ws.listen(4000, () => {
      return new SubscriptionServer({
        execute,
        subscribe,
        schema,
      }, {
          server: ws,
          path: '/subscriptions',
        });
    });

    expressApp.use('/graphql', graphqlExpress({
      schema: buildSchema(),
    }))
      .use('/graphiql', graphiqlExpress({
        endpointURL: '/graphql',
        subscriptionsEndpoint: 'ws://localhost:4000/subscriptions',
      }));

    settings.setData('apollo_ws', ws);
  }
};
