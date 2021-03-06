import * as path from 'path';
import * as dotenv from 'dotenv';
import * as pkg from '../../../package.json';

/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config({ path: path.join(process.cwd(), `.env${((process.env.NODE_ENV === 'test') ? '.test' : '')}`) });

/**
 * Environment variables
 */
export const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  app: {
    name: getOsEnv('APP_NAME'),
    version: (pkg as any).version,
    description: (pkg as any).description,
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

function getOsEnv(key: string): string {
  return process.env[key] as string;
}

function toNumber(value: string): number {
  return parseInt(value, 10);
}

function toBool(value: string): boolean {
  return value === 'true';
}

function normalizePort(port: string): number | string | boolean {
  const parsedPort = parseInt(port, 10);
  if (isNaN(parsedPort)) { // named pipe
    return port;
  }
  if (parsedPort >= 0) { // port number
    return parsedPort;
  }
  return false;
}
