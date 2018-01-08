"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("glob");
const env_1 = require("../core/env");
exports.repositoryLoader = (settings) => {
    if (settings) {
        const patterns = env_1.env.app.dirs.repositories;
        patterns.forEach((pattern) => {
            glob(pattern, (err, files) => {
                for (const file of files) {
                    require(file);
                }
            });
        });
    }
};
//# sourceMappingURL=repositoryLoader.js.map