import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';
import * as express from 'express';
import { env } from '../core/env';
import { ApoliceStatus } from '../../cross-infra/enums/ApoliceStatus';
import { ApoliceNotFoundError } from '../../app/errors/ApoliceNotFoundError';
// import { Logger, LoggerInterface } from '../decorators/Logger';

@Middleware({ type: 'after' })
export class ApoliceMiddleware implements ExpressErrorMiddlewareInterface {
  public isProduction = env.isProduction;

  // constructor(
  //   @Logger(__filename) private log: LoggerInterface
  // ) { }

  public error(error: ApoliceNotFoundError, req: express.Request, res: express.Response, next: express.NextFunction): void {

    if (error.message === 'NOT_FOUND') {
      const teste: any = ApoliceStatus.apoliceStatus(404);
      throw new ApoliceNotFoundError(teste[0].codigo, teste[0].descricao);
    } else {
      res.status(error.httpCode || 500);
      res.json({
        name: error.name,
        message: error.message,
        errors: error['errors'] || [],
      });
    }

    // if (this.isProduction) {
    //   this.log.error(error.name, error.message);
    // } else {
    //   this.log.error(error.name, error.stack);
    // }

  }

}
