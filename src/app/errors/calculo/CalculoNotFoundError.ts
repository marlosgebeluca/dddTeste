import { HttpError } from 'routing-controllers';

export class CalculoNotFoundError extends HttpError {
    constructor() {
        super(404, 'Cálculo não encontrado');
    }
}
