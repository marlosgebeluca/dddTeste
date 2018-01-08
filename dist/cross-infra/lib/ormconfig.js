"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const jsonfile = require("jsonfile");
const env_1 = require("../../app/core/env");
const content = {
    type: env_1.env.db.type,
    host: env_1.env.db.host,
    port: env_1.env.db.port,
    username: env_1.env.db.username,
    password: env_1.env.db.password,
    database: env_1.env.db.database,
    entities: env_1.env.app.dirs.entities,
    migrations: env_1.env.app.dirs.migrations,
    cli: {
        migrationsDir: env_1.env.app.dirs.migrationsDir,
    },
};
const filePath = path.join(process.cwd(), 'ormconfig.json');
jsonfile.writeFile(filePath, content, { spaces: 2 }, (err) => {
    if (err === null) {
        console.log('Successfully generated ormconfig.json form the .env file');
    }
    else {
        console.error('Failed to generate the ormconfig.json', err);
    }
});
//# sourceMappingURL=ormconfig.js.map