"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
class EndossoNotFoundError extends routing_controllers_1.HttpError {
    constructor(codigo, mensagem) {
        super(codigo, mensagem);
    }
}
exports.EndossoNotFoundError = EndossoNotFoundError;
//# sourceMappingURL=EndossoNotFoundError.js.map