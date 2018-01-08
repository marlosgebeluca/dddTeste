"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const env_1 = require("../core/env");
const Logger_1 = require("../decorators/Logger");
let ErrorHandlerMiddleware = class ErrorHandlerMiddleware {
    constructor(log) {
        this.log = log;
        this.isProduction = env_1.env.isProduction;
    }
    error(error, req, res, next) {
        res.status(error.httpCode || 500);
        res.json({
            name: error.name,
            message: error.message,
            errors: error['errors'] || [],
        });
        if (this.isProduction) {
            this.log.error(error.name, error.message);
        }
        else {
            this.log.error(error.name, error.stack);
        }
    }
};
ErrorHandlerMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'after' }),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [Object])
], ErrorHandlerMiddleware);
exports.ErrorHandlerMiddleware = ErrorHandlerMiddleware;
//# sourceMappingURL=ErrorHandlerMiddleware.js.map