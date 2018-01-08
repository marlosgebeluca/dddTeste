"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const basicAuth = require("express-basic-auth");
const env_1 = require("../core/env");
exports.swaggerLoader = (settings) => {
    if (settings && env_1.env.swagger.enabled) {
        const expressApp = settings.getData('express_app');
        const swaggerFile = require(path.join(__dirname, '../..', env_1.env.swagger.file));
        // Add npm infos to the swagger doc
        swaggerFile.info = {
            title: env_1.env.app.name,
            description: env_1.env.app.description,
            version: env_1.env.app.version,
        };
        swaggerFile.host = env_1.env.app.route;
        swaggerFile.basePath = env_1.env.app.routePrefix;
        expressApp.use(env_1.env.swagger.route, env_1.env.swagger.username ? basicAuth({
            users: {
                [`${env_1.env.swagger.username}`]: env_1.env.swagger.password,
            },
            challenge: true,
        }) : (req, res, next) => next(), swaggerUi.serve, swaggerUi.setup(swaggerFile));
    }
};
//# sourceMappingURL=swaggerLoader.js.map