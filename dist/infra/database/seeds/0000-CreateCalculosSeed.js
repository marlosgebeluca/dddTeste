"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Calculo_1 = require("../../models/calculo/Calculo");
class CreateCalculosSeed {
    seed(factory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield factory
                .get(Calculo_1.Calculo)
                .create();
        });
    }
}
exports.CreateCalculosSeed = CreateCalculosSeed;
//# sourceMappingURL=0000-CreateCalculosSeed.js.map