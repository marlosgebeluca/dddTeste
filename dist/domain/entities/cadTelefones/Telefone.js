"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const TiposFone_1 = require("../../enums/cadTelefones/TiposFone");
class Telefone {
}
tslib_1.__decorate([
    class_validator_1.IsIn(TiposFone_1.TiposFone.foneTipos()),
    tslib_1.__metadata("design:type", Number)
], Telefone.prototype, "tpFoneCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Telefone.prototype, "fonePrincipal", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Telefone.prototype, "foneRecebeSms", void 0);
exports.Telefone = Telefone;
//# sourceMappingURL=Telefone.js.map