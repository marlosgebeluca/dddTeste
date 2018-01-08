"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const env_1 = require("../core/env");
const authorizationChecker_1 = require("../../cross-infra/auth/authorizationChecker");
const bodyParser = require("body-parser");
exports.expressLoader = (settings) => {
    if (settings) {
        const connection = settings.getData('connection');
        /**
         * We create a new express server instance.
         * We could have also use useExpressServer here to attach controllers to an existing express instance.
         */
        const expressApp = routing_controllers_1.createExpressServer({
            cors: true,
            classTransformer: true,
            routePrefix: env_1.env.app.routePrefix,
            defaultErrorHandler: false,
            /**
             * We can add options about how routing-controllers should configure itself.
             * Here we specify what controllers should be registered in our express server.
             */
            controllers: env_1.env.app.dirs.controllers,
            middlewares: env_1.env.app.dirs.middlewares,
            interceptors: env_1.env.app.dirs.interceptors,
            /**
             * Authorization features
             */
            authorizationChecker: authorizationChecker_1.authorizationChecker(connection),
        });
        expressApp.use(bodyParser.json());
        // Run application to listen on given port
        expressApp.listen(env_1.env.app.port);
        // Here we can set the data for other loaders
        settings.setData('express_app', expressApp);
    }
};
//# sourceMappingURL=expressLoader.js.map