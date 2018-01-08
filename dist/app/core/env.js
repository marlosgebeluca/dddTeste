"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const dotenv = require("dotenv");
const pkg = require("../../../package.json");
/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config({ path: path.join(process.cwd(), `.env${((process.env.NODE_ENV === 'test') ? '.test' : '')}`) });
/**
 * Environment variables
 */
exports.env = {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    app: {
        name: getOsEnv('APP_NAME'),
        version: pkg.version,
        description: pkg.description,
        route: getOsEnv('APP_ROUTE'),
        routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
        port: normalizePort(process.env.PORT || '3000'),
        banner: toBool(getOsEnv('APP_BANNER')),
        dirs: {
            migrations: [path.relative(path.join(process.cwd()), path.join(__dirname, '../..', 'infra/database/migrations/*.ts'))],
            migrationsDir: path.relative(path.join(process.cwd()), path.join(__dirname, '../..', 'infra/database/migrations')),
            entities: [path.relative(path.join(process.cwd()), path.join(__dirname, '../..', 'infra/**/models/**/*{.js,.ts}'))],
            subscribers: [path.join(__dirname, '..', '**/*Subscriber{.js,.ts}')],
            controllers: [path.join(__dirname, '../..', 'interfaces/**/*Controller{.js,.ts}')],
            mappers: [path.join(__dirname, '../..', 'infra/mappers/**/*Mapper{.js,.ts}')],
            services: [path.join(__dirname, '../..', 'domain/services/**/*Service{.js,.ts}')],
            repositories: [path.join(__dirname, '../..', 'infra/repositories/**/*Repository{.js,.ts}')],
            middlewares: [path.join(__dirname, '..', '**/*Middleware{.js,.ts}')],
            interceptors: [path.join(__dirname, '..', '**/*Interceptor{.js,.ts}')],
        },
    },
    log: {
        level: getOsEnv('LOG_LEVEL'),
        json: toBool(getOsEnv('LOG_JSON')),
        output: getOsEnv('LOG_OUTPUT'),
    },
    auth: {
        route: getOsEnv('AUTH_ROUTE'),
    },
    db: {
        type: getOsEnv('DB_TYPE'),
        host: getOsEnv('DB_HOST'),
        port: toNumber(getOsEnv('DB_PORT')),
        username: getOsEnv('DB_USERNAME'),
        password: getOsEnv('DB_PASSWORD'),
        database: getOsEnv('DB_DATABASE'),
        synchronize: toBool(getOsEnv('DB_SYNCHRONIZE')),
        logging: toBool(getOsEnv('DB_LOGGING')),
    },
    swagger: {
        enabled: toBool(getOsEnv('SWAGGER_ENABLED')),
        route: getOsEnv('SWAGGER_ROUTE'),
        file: getOsEnv('SWAGGER_FILE'),
        username: getOsEnv('SWAGGER_USERNAME'),
        password: getOsEnv('SWAGGER_PASSWORD'),
    },
    monitor: {
        enabled: toBool(getOsEnv('MONITOR_ENABLED')),
        route: getOsEnv('MONITOR_ROUTE'),
        username: getOsEnv('MONITOR_USERNAME'),
        password: getOsEnv('MONITOR_PASSWORD'),
    },
    graphql: {
        enabled: toBool(getOsEnv('GRAPHQL_ENABLED')),
        route: getOsEnv('GRAPHQL_ROUTE'),
    },
};
function getOsEnv(key) {
    return process.env[key];
}
function toNumber(value) {
    return parseInt(value, 10);
}
function toBool(value) {
    return value === 'true';
}
function normalizePort(port) {
    const parsedPort = parseInt(port, 10);
    if (isNaN(parsedPort)) {
        return port;
    }
    if (parsedPort >= 0) {
        return parsedPort;
    }
    return false;
}
//# sourceMappingURL=env.js.map