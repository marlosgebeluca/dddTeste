"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
class CadClientesNotFoundError extends routing_controllers_1.HttpError {
    constructor() {
        super(404, 'Endosso não encontrado');
    }
}
exports.CadClientesNotFoundError = CadClientesNotFoundError;
//# sourceMappingURL=CadClientesNotFoundError.js.map