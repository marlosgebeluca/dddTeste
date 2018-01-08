"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const IsValidCpfCnpj_1 = require("../../validators/IsValidCpfCnpj");
class Segurado {
}
tslib_1.__decorate([
    class_validator_1.IsIn(['F', 'J']),
    tslib_1.__metadata("design:type", String)
], Segurado.prototype, "tipoPessoa", void 0);
tslib_1.__decorate([
    IsValidCpfCnpj_1.IsValidCpfCnpj(),
    tslib_1.__metadata("design:type", String)
], Segurado.prototype, "cpfCnpj", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Segurado.prototype, "nome", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(['M', 'F']),
    tslib_1.__metadata("design:type", String)
], Segurado.prototype, "sexo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], Segurado.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Segurado.prototype, "telefone", void 0);
exports.Segurado = Segurado;
//# sourceMappingURL=Segurado.js.map