"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const helmet = require("helmet");
const routing_controllers_1 = require("routing-controllers");
let SecurityMiddleware = class SecurityMiddleware {
    use(req, res, next) {
        return helmet()(req, res, next);
    }
};
SecurityMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'before' })
], SecurityMiddleware);
exports.SecurityMiddleware = SecurityMiddleware;
//# sourceMappingURL=SecurityMiddleware.js.map