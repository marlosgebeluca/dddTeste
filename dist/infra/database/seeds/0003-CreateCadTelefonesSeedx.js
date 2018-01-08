"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CadTelefones_1 = require("../../models/cadTelefones/CadTelefones");
class CreateCadTelefonesSeed {
    seed(factory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield factory
                .get(CadTelefones_1.CadTelefones)
                .createMany(5);
        });
    }
}
exports.CreateCadTelefonesSeed = CreateCadTelefonesSeed;
//# sourceMappingURL=0003-CreateCadTelefonesSeedx.js.map