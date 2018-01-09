"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const env_1 = require("../core/env");
const EndossoStatus_1 = require("../../cross-infra/enums/EndossoStatus");
const EndossoNotFoundError_1 = require("../../app/errors/EndossoNotFoundError");
let EndossoMiddleware = class EndossoMiddleware {
    constructor() {
        this.isProduction = env_1.env.isProduction;
    }
    error(error, req, res, next) {
        if (error.message === 'NOT_FOUND') {
            const teste = EndossoStatus_1.EndossoStatus.apoliceStatus(404);
            throw new EndossoNotFoundError_1.EndossoNotFoundError(teste[0].codigo, teste[0].descricao);
        }
        else {
            res.status(error.httpCode || 500);
            res.json({
                name: error.name,
                message: error.message,
                errors: error['errors'] || [],
            });
        }
    }
};
EndossoMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'after' })
], EndossoMiddleware);
exports.EndossoMiddleware = EndossoMiddleware;
//# sourceMappingURL=EndossoMiddleware.js.map