"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
class CadTelefonesNotFoundError extends routing_controllers_1.HttpError {
    constructor() {
        super(404, 'Endosso não encontrado');
    }
}
exports.CadTelefonesNotFoundError = CadTelefonesNotFoundError;
//# sourceMappingURL=CadTelefonesNotFoundError.js.map