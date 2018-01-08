"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const Seguradoras_1 = require("../../enums/Seguradoras");
class CalculoSeguradora {
}
tslib_1.__decorate([
    class_validator_1.IsIn(Seguradoras_1.Seguradoras.seguradorasEnum()),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "seguradora", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], CalculoSeguradora.prototype, "calcula", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "assistencia", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "carroReserva", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "vidros", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "percComissao", void 0);
exports.CalculoSeguradora = CalculoSeguradora;
//# sourceMappingURL=CalculoSeguradora.js.map