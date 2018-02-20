"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const env_1 = require("../core/env");
const ApoliceStatus_1 = require("../../cross-infra/enums/ApoliceStatus");
const ApoliceNotFoundError_1 = require("../../app/errors/ApoliceNotFoundError");
const Logger_1 = require("../decorators/Logger");
let ApoliceMiddleware = class ApoliceMiddleware {
    constructor(log) {
        this.log = log;
        this.isProduction = env_1.env.isProduction;
    }
    error(error, req, res, next) {
        if (error.message === 'NOT_FOUND') {
            const teste = ApoliceStatus_1.ApoliceStatus.apoliceStatus(404);
            throw new ApoliceNotFoundError_1.ApoliceNotFoundError(teste[0].codigo, teste[0].descricao);
        }
        else {
            res.status(error.httpCode || 500);
            res.json({
                name: error.name,
                message: error.message,
                errors: error['errors'] || [],
            });
        }
        if (this.isProduction) {
            this.log.error(error.name, error.message);
        }
        else {
            this.log.error(error.name, error.stack);
        }
    }
};
ApoliceMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'after' }),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [Object])
], ApoliceMiddleware);
exports.ApoliceMiddleware = ApoliceMiddleware;
//# sourceMappingURL=ApoliceMiddleware.js.map