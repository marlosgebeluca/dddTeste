"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
class ApoliceNotFoundError extends routing_controllers_1.HttpError {
    constructor(codigo, mensagem) {
        super(codigo, mensagem);
    }
}
exports.ApoliceNotFoundError = ApoliceNotFoundError;
//# sourceMappingURL=ApoliceNotFoundError.js.map