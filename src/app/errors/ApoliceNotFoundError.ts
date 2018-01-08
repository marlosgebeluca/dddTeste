import { HttpError } from 'routing-controllers';

export class ApoliceNotFoundError extends HttpError {
    constructor() {
        super(404, 'Apolíce não encontrado');
    }
}
