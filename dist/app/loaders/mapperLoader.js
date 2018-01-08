"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("glob");
const env_1 = require("../core/env");
exports.mapperLoader = (settings) => {
    if (settings) {
        const patterns = env_1.env.app.dirs.mappers;
        patterns.forEach((pattern) => {
            glob(pattern, (err, files) => {
                for (const file of files) {
                    require(file);
                }
            });
        });
    }
};
//# sourceMappingURL=mapperLoader.js.map