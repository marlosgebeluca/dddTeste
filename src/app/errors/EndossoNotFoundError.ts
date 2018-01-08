import { HttpError } from 'routing-controllers';

export class EndossoNotFoundError extends HttpError {
    constructor() {
        super(404, 'Endosso não encontrado');
    }
}
