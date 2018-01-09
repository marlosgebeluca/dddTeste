import { HttpError } from 'routing-controllers';

export class EndossoNotFoundError extends HttpError {
    constructor(codigo: number, mensagem: string) {
        super(codigo, mensagem);
    }
}
