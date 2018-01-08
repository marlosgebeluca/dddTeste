"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * EXPRESS TYPESCRIPT BOILERPLATE
 * ----------------------------------------
 *
 * This is a boilerplate for Node.js Application written in TypeScript.
 * The basic layer of this app is express. For further information visit
 * the 'README.md' file.
 */
require("reflect-metadata");
const banner_1 = require("./core/banner");
const Logger_1 = require("./core/Logger");
const log = new Logger_1.Logger(__filename);
const microframework_1 = require("microframework");
const expressLoader_1 = require("./loaders/expressLoader");
const winstonLoader_1 = require("./loaders/winstonLoader");
const typeormLoader_1 = require("./loaders/typeormLoader");
const swaggerLoader_1 = require("./loaders/swaggerLoader");
const monitorLoader_1 = require("./loaders/monitorLoader");
const serviceLoader_1 = require("./loaders/serviceLoader");
const mapperLoader_1 = require("./loaders/mapperLoader");
const repositoryLoader_1 = require("./loaders/repositoryLoader");
const homeLoader_1 = require("./loaders/homeLoader");
const publicLoader_1 = require("./loaders/publicLoader");
const iocLoader_1 = require(".//loaders/iocLoader");
const eventDispatchLoader_1 = require("./loaders/eventDispatchLoader");
const apolloLoader_1 = require("./loaders/apolloLoader");
microframework_1.bootstrapMicroframework({
    /**
     * Loader is a place where you can configure all your modules during microframework
     * bootstrap. All loaders are executed one by one in a sequential order.
     */
    loaders: [
        winstonLoader_1.winstonLoader,
        iocLoader_1.iocLoader,
        eventDispatchLoader_1.eventDispatchLoader,
        mapperLoader_1.mapperLoader,
        serviceLoader_1.serviceLoader,
        repositoryLoader_1.repositoryLoader,
        typeormLoader_1.typeormLoader,
        expressLoader_1.expressLoader,
        swaggerLoader_1.swaggerLoader,
        monitorLoader_1.monitorLoader,
        homeLoader_1.homeLoader,
        publicLoader_1.publicLoader,
        apolloLoader_1.apolloLoader,
    ],
})
    .then(() => banner_1.banner(log))
    .catch(error => {
    log.error('Application is crashed: ' + error.stack);
});
//# sourceMappingURL=app.js.map