"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const IsValidCpfCnpj_1 = require("../../validators/IsValidCpfCnpj");
const VinculosSegurado_1 = require("../../enums/VinculosSegurado");
class Condutor {
}
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], Condutor.prototype, "condutorPrincipal", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Condutor.prototype, "nome", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(['M', 'F']),
    tslib_1.__metadata("design:type", String)
], Condutor.prototype, "sexo", void 0);
tslib_1.__decorate([
    IsValidCpfCnpj_1.IsValidCpfCnpj(),
    tslib_1.__metadata("design:type", String)
], Condutor.prototype, "cpfCnpj", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Condutor.prototype, "nascimento", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(VinculosSegurado_1.VinculosSegurado.vinculosEnum()),
    tslib_1.__metadata("design:type", Number)
], Condutor.prototype, "relacaoSegurado", void 0);
exports.Condutor = Condutor;
//# sourceMappingURL=Condutor.js.map