"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let CnNegocios = class CnNegocios {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'cn_codigo' }),
    tslib_1.__metadata("design:type", Number)
], CnNegocios.prototype, "cnCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cli_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], CnNegocios.prototype, "cliCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cn_nome', type: 'varchar', length: 200 }),
    tslib_1.__metadata("design:type", String)
], CnNegocios.prototype, "cnNome", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cn_tipo_pessoa', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], CnNegocios.prototype, "cnTipoPessoa", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cn_cpf_cnpj', type: 'varchar', length: 18 }),
    tslib_1.__metadata("design:type", String)
], CnNegocios.prototype, "cnCpfCnpj", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cn_data_nascimento', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], CnNegocios.prototype, "cnDataNascimento", void 0);
CnNegocios = tslib_1.__decorate([
    typeorm_1.Entity('Dados.CnNegocios')
], CnNegocios);
exports.CnNegocios = CnNegocios;
//# sourceMappingURL=CnNegocios.js.map