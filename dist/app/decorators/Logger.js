"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const Logger_1 = require("../core/Logger");
function Logger(scope) {
    return (object, propertyName, index) => {
        const logger = new Logger_1.Logger(scope);
        typedi_1.Container.registerHandler({ object, propertyName, index, value: () => logger });
    };
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map