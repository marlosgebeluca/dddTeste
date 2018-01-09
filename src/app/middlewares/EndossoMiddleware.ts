import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';
import * as express from 'express';
import { env } from '../core/env';
import { EndossoStatus } from '../../cross-infra/enums/EndossoStatus';
import { EndossoNotFoundError } from '../../app/errors/EndossoNotFoundError';

@Middleware({ type: 'after' })
export class EndossoMiddleware implements ExpressErrorMiddlewareInterface {
  public isProduction = env.isProduction;

  public error(error: EndossoNotFoundError, req: express.Request, res: express.Response, next: express.NextFunction): void {

    if (error.message === 'NOT_FOUND') {
      const teste: any = EndossoStatus.apoliceStatus(404);
      throw new EndossoNotFoundError(teste[0].codigo, teste[0].descricao);
    } else {
      res.status(error.httpCode || 500);
      res.json({
        name: error.name,
        message: error.message,
        errors: error['errors'] || [],
      });
    }

  }

}
