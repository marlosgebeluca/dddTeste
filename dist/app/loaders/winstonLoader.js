"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const env_1 = require("../core/env");
exports.winstonLoader = (settings) => {
    winston.configure({
        transports: [
            new winston.transports.Console({
                level: env_1.env.log.level,
                handleExceptions: true,
                json: env_1.env.log.json,
                timestamp: env_1.env.node !== 'development',
                colorize: env_1.env.node === 'development',
            }),
        ],
    });
};
//# sourceMappingURL=winstonLoader.js.map