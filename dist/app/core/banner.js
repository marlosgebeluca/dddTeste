"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
function banner(log) {
    if (env_1.env.app.banner) {
        log.info(``);
        log.info(`Aloha, your app is ready on ${env_1.env.app.route}${env_1.env.app.routePrefix}`);
        log.info(`To shut it down, press <CTRL> + C at any time.`);
        log.info(``);
        log.info('-------------------------------------------------------');
        log.info(`Environment  : ${env_1.env.node}`);
        log.info(`Version      : ${env_1.env.app.version}`);
        log.info(``);
        log.info(`API Info     : ${env_1.env.app.route}${env_1.env.app.routePrefix}`);
        if (env_1.env.swagger.enabled) {
            log.info(`Swagger      : ${env_1.env.app.route}${env_1.env.swagger.route}`);
        }
        if (env_1.env.monitor.enabled) {
            log.info(`Monitor      : ${env_1.env.app.route}${env_1.env.monitor.route}`);
        }
        if (env_1.env.graphql.enabled) {
            log.info(`GraphQL      : ${env_1.env.app.route}${env_1.env.graphql.route}`);
        }
        log.info('-------------------------------------------------------');
        log.info('');
    }
    else {
        log.info(`Application is up and running.`);
    }
}
exports.banner = banner;
//# sourceMappingURL=banner.js.map