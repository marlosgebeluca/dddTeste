"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CadClientes_1 = require("../../../infra/models/cadClientes/CadClientes");
class CreateCadClientesSeed {
    seed(factory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield factory
                .get(CadClientes_1.CadClientes)
                .createMany(10);
        });
    }
}
exports.CreateCadClientesSeed = CreateCadClientesSeed;
//# sourceMappingURL=0001-CreateCadClientesSeedx.js.map