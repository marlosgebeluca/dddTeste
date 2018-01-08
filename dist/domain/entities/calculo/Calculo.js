"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const Renovacao_1 = require("./Renovacao");
const Segurado_1 = require("./Segurado");
const Proprietario_1 = require("./Proprietario");
const Veiculo_1 = require("./Veiculo");
const IsValidDate_1 = require("../../validators/IsValidDate");
class Calculo {
}
tslib_1.__decorate([
    class_validator_1.IsIn(['N', 'R']),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "tipo", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Calculo.prototype, "vigencia", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], Calculo.prototype, "condutorIndeterminado", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Renovacao_1.Renovacao)
], Calculo.prototype, "renovacao", void 0);
tslib_1.__decorate([
    class_validator_1.IsDefined(),
    tslib_1.__metadata("design:type", Segurado_1.Segurado)
], Calculo.prototype, "segurado", void 0);
tslib_1.__decorate([
    class_validator_1.IsDefined(),
    tslib_1.__metadata("design:type", Proprietario_1.Proprietario)
], Calculo.prototype, "proprietario", void 0);
tslib_1.__decorate([
    class_validator_1.IsDefined(),
    tslib_1.__metadata("design:type", Veiculo_1.Veiculo)
], Calculo.prototype, "veiculo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Array)
], Calculo.prototype, "condutores", void 0);
tslib_1.__decorate([
    class_validator_1.IsDefined(),
    class_validator_1.ArrayNotEmpty(),
    tslib_1.__metadata("design:type", Array)
], Calculo.prototype, "seguradoras", void 0);
exports.Calculo = Calculo;
//# sourceMappingURL=Calculo.js.map