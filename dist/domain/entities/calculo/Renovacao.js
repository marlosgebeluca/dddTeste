"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const Seguradoras_1 = require("../../enums/Seguradoras");
class Renovacao {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsIn(Seguradoras_1.Seguradoras.seguradorasAtivasEnum()),
    tslib_1.__metadata("design:type", Number)
], Renovacao.prototype, "seguradoraAnterior", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Renovacao.prototype, "vigenciaAnterior", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Renovacao.prototype, "apoliceAnterior", void 0);
exports.Renovacao = Renovacao;
//# sourceMappingURL=Renovacao.js.map