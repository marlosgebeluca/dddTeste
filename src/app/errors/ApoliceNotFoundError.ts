import { HttpError } from 'routing-controllers';

export class ApoliceNotFoundError extends HttpError {
    constructor(codigo: number, mensagem: string) {
        super(codigo, mensagem);
    }
}
