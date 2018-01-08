"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const IsValidCpfCnpj_1 = require("../../validators/IsValidCpfCnpj");
const VinculosSegurado_1 = require("../../enums/VinculosSegurado");
class Proprietario {
}
tslib_1.__decorate([
    class_validator_1.IsIn(['F', 'J']),
    tslib_1.__metadata("design:type", String)
], Proprietario.prototype, "tipoPessoa", void 0);
tslib_1.__decorate([
    IsValidCpfCnpj_1.IsValidCpfCnpj(),
    tslib_1.__metadata("design:type", String)
], Proprietario.prototype, "cpfCnpj", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Proprietario.prototype, "nome", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(['M', 'F']),
    tslib_1.__metadata("design:type", String)
], Proprietario.prototype, "sexo", void 0);
tslib_1.__decorate([
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], Proprietario.prototype, "nascimento", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(VinculosSegurado_1.VinculosSegurado.vinculosEnum()),
    tslib_1.__metadata("design:type", Number)
], Proprietario.prototype, "vinculoSegurado", void 0);
exports.Proprietario = Proprietario;
//# sourceMappingURL=Proprietario.js.map