"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const EmDoctos_1 = require("../../models/EmDoctos");
class CreateEmDoctosSeed {
    seed(factory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield factory.get(EmDoctos_1.EmDoctos).create();
        });
    }
}
exports.CreateEmDoctosSeed = CreateEmDoctosSeed;
//# sourceMappingURL=0002-CreateEmDoctosSeedx.js.map