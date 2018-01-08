"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
class CalculoNotFoundError extends routing_controllers_1.HttpError {
    constructor() {
        super(404, 'Cálculo não encontrado');
    }
}
exports.CalculoNotFoundError = CalculoNotFoundError;
//# sourceMappingURL=CalculoNotFoundError.js.map