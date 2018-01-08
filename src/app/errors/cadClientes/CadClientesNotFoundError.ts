import { HttpError } from 'routing-controllers';

export class CadClientesNotFoundError extends HttpError {
    constructor() {
        super(404, 'Endosso não encontrado');
    }
}
