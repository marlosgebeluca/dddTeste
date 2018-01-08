"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const routing_controllers_1 = require("routing-controllers");
exports.iocLoader = (settings) => {
    /**
     * Setup routing-controllers to use typedi container.
     */
    routing_controllers_1.useContainer(typedi_1.Container);
    typeorm_1.useContainer(typedi_1.Container);
};
//# sourceMappingURL=iocLoader.js.map