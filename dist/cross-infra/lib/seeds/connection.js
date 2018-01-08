"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const args = process.argv;
const runDir = process.cwd();
// Get cli parameter for logging
const logging = args.indexOf('--logging') >= 0 || args.indexOf('-L') >= 0 || false;
// Get cli parameter for ormconfig.json or another json file
const configParam = '--config';
const hasConfigPath = args.indexOf(configParam) >= 0 || false;
const indexOfConfigPath = args.indexOf(configParam) + 1;
/**
 * Returns a TypeORM database connection for our entity-manager
 */
exports.getConnection = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const ormconfig = (hasConfigPath)
        ? require(`${args[indexOfConfigPath]}`)
        : require(`${runDir}/ormconfig.json`);
    return yield typeorm_1.createConnection({
        type: ormconfig.type,
        host: ormconfig.host,
        port: ormconfig.port,
        username: ormconfig.username,
        password: ormconfig.password,
        database: ormconfig.database,
        entities: ormconfig.entities,
        logging,
    });
});
//# sourceMappingURL=connection.js.map