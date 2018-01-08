"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const morgan = require("morgan");
const routing_controllers_1 = require("routing-controllers");
const Logger_1 = require("../core/Logger");
const env_1 = require("../core/env");
let LogMiddleware = class LogMiddleware {
    constructor() {
        this.log = new Logger_1.Logger(__dirname);
    }
    use(req, res, next) {
        return morgan(env_1.env.log.output, {
            stream: {
                write: this.log.info.bind(this.log),
            },
        })(req, res, next);
    }
};
LogMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'before' })
], LogMiddleware);
exports.LogMiddleware = LogMiddleware;
//# sourceMappingURL=LogMiddleware.js.map