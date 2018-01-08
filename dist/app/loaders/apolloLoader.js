"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const graphql_1 = require("graphql");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const apollo_server_express_1 = require("apollo-server-express");
const RootSchema_1 = require("../../interfaces/graphql/RootSchema");
exports.apolloLoader = (settings) => {
    if (settings && settings.getData('connection')) {
        const expressApp = settings.getData('express_app');
        const ws = http_1.createServer(expressApp);
        const schema = RootSchema_1.buildSchema();
        ws.listen(4000, () => {
            return new subscriptions_transport_ws_1.SubscriptionServer({
                execute: graphql_1.execute,
                subscribe: graphql_1.subscribe,
                schema,
            }, {
                server: ws,
                path: '/subscriptions',
            });
        });
        expressApp.use('/graphql', apollo_server_express_1.graphqlExpress({
            schema: RootSchema_1.buildSchema(),
        }))
            .use('/graphiql', apollo_server_express_1.graphiqlExpress({
            endpointURL: '/graphql',
            subscriptionsEndpoint: 'ws://localhost:4000/subscriptions',
        }));
        settings.setData('apollo_ws', ws);
    }
};
//# sourceMappingURL=apolloLoader.js.map