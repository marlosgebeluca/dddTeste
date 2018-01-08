import { HttpError } from 'routing-controllers';

export class CnNegociosNotFoundError extends HttpError {
    constructor() {
        super(404, 'Endosso não encontrado');
    }
}
