import * as express from 'express';
import * as morgan from 'morgan';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { Logger } from '../core/Logger';
import { env } from '../core/env';

@Middleware({ type: 'before' })
export class LogMiddleware implements ExpressMiddlewareInterface {
  private log = new Logger(__dirname);

  public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
    return morgan(env.log.output, {
      stream: {
        write: this.log.info.bind(this.log),
      },
    })(req, res, next);
  }
}
