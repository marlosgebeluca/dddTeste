"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("glob");
const env_1 = require("../core/env");
exports.serviceLoader = (settings) => {
    if (settings) {
        const patterns = env_1.env.app.dirs.services;
        patterns.forEach((pattern) => {
            glob(pattern, (err, files) => {
                for (const file of files) {
                    require(file);
                }
            });
        });
    }
};
//# sourceMappingURL=serviceLoader.js.map