"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
class EndossoNotFoundError extends routing_controllers_1.HttpError {
    constructor() {
        super(404, 'Endosso não encontrado');
    }
}
exports.EndossoNotFoundError = EndossoNotFoundError;
//# sourceMappingURL=EndossoNotFoundError.js.map