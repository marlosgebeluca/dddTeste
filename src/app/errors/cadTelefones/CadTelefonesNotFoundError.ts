import { HttpError } from 'routing-controllers';

export class CadTelefonesNotFoundError extends HttpError {
    constructor() {
        super(404, 'Endosso não encontrado');
    }
}
