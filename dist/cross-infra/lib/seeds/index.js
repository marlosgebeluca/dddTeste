"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const path = require("path");
const glob = require("glob");
const commander = require("commander");
const Chalk = require("chalk");
const Factory_1 = require("./Factory");
const connection_1 = require("./connection");
// Get executiuon path to look from there for seeds and factories
const runDir = process.cwd();
// Cli helper
commander
    .version('0.0.0')
    .description('Run database seeds of your project')
    .option('-L, --logging', 'enable sql query logging')
    .option('--factories <path>', 'add filepath for your factories')
    .option('--seeds <path>', 'add filepath for your seeds')
    .option('--config <filepath>', 'add filepath to your database config (must be a json)')
    .parse(process.argv);
// Get cli parameter for a different factory path
const factoryPath = (commander.factories)
    ? commander.factories
    : 'src/infra/database/factories/';
// Get cli parameter for a different seeds path
const seedsPath = (commander.seeds)
    ? commander.seeds
    : 'src/infra/database/seeds/';
// Search for seeds and factories
glob(path.join(runDir, factoryPath, '**/*Factory{.js,.ts}'), (errFactories, factories) => {
    glob(path.join(runDir, seedsPath, '*Seed{.js,.ts}'), (errSeeds, seeds) => {
        const log = console.log;
        const chalk = Chalk.default;
        // Status logging to print out the amount of factories and seeds.
        log(chalk.bold('seeds'));
        log('🔎 ', chalk.gray.underline(`found:`), chalk.blue.bold(`${factories.length} factories`, chalk.gray('&'), chalk.blue.bold(`${seeds.length} seeds`)));
        // Initialize all factories
        for (const factory of factories) {
            require(factory);
        }
        // Get typeorm database connection and pass them to the factory instance
        connection_1.getConnection().then((connection) => {
            const factory = Factory_1.Factory.getInstance();
            factory.setConnection(connection);
            // Initialize and seed all seeds.
            const queue = [];
            for (const seed of seeds) {
                try {
                    const seedFile = require(seed);
                    let className = seed.split('/')[seed.split('/').length - 1];
                    className = className.replace('.ts', '').replace('.js', '');
                    className = className.split('-')[className.split('-').length - 1];
                    log('\n' + chalk.gray.underline(`executing seed:  `), chalk.green.bold(`${className}`));
                    queue.push((new seedFile[className]()).seed(factory));
                }
                catch (error) {
                    console.error('Could not run seed ' + seed, error);
                }
            }
            // Promise to catch the end for termination and logging
            Promise
                .all(queue)
                .then(() => {
                log('\n👍 ', chalk.gray.underline(`finished seeding`));
                process.exit(0);
            })
                .catch((error) => {
                console.error('Could not run seed ' + error);
                process.exit(1);
            });
        }).catch((error) => {
            console.error('Could not connection to database ' + error);
            process.exit(1);
        });
    });
});
tslib_1.__exportStar(require("./Factory"), exports);
tslib_1.__exportStar(require("./utils"), exports);
//# sourceMappingURL=index.js.map