"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("glob");
const env_1 = require("../core/env");
/**
 * eventDispatchLoader
 * ------------------------------
 * This loads all the created subscribers into the project, so we do not have to
 * import them manually
 */
exports.eventDispatchLoader = (settings) => {
    if (settings) {
        const patterns = env_1.env.app.dirs.subscribers;
        patterns.forEach((pattern) => {
            glob(pattern, (err, files) => {
                for (const file of files) {
                    require(file);
                }
            });
        });
    }
};
//# sourceMappingURL=eventDispatchLoader.js.map