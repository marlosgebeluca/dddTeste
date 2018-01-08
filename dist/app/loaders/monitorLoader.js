"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monitor = require("express-status-monitor");
const basicAuth = require("express-basic-auth");
const env_1 = require("../core/env");
exports.monitorLoader = (settings) => {
    if (settings && env_1.env.monitor.enabled) {
        const expressApp = settings.getData('express_app');
        expressApp.use(monitor());
        expressApp.get(env_1.env.monitor.route, env_1.env.monitor.username ? basicAuth({
            users: {
                [`${env_1.env.monitor.username}`]: env_1.env.monitor.password,
            },
            challenge: true,
        }) : (req, res, next) => next(), monitor().pageRoute);
    }
};
//# sourceMappingURL=monitorLoader.js.map