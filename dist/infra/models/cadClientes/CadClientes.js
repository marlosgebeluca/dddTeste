"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const CadTelefones_1 = require("../../../infra/models/cadTelefones/CadTelefones");
let CadClientes = class CadClientes {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'cli_codigo' }),
    tslib_1.__metadata("design:type", Number)
], CadClientes.prototype, "cliCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => CadTelefones_1.CadTelefones, telefone => telefone.foneCodigo),
    tslib_1.__metadata("design:type", Array)
], CadClientes.prototype, "telefones", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cli_nome', type: 'varchar', length: 200 }),
    tslib_1.__metadata("design:type", String)
], CadClientes.prototype, "cliNome", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cli_tipo_pessoa', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], CadClientes.prototype, "cliTipoPessoa", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cli_cpf_cnpj', type: 'varchar', length: 18 }),
    tslib_1.__metadata("design:type", String)
], CadClientes.prototype, "cliCpfCnpj", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cli_data_nascimento', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], CadClientes.prototype, "cliDataNascimento", void 0);
CadClientes = tslib_1.__decorate([
    typeorm_1.Entity('Dados.CadClientes')
], CadClientes);
exports.CadClientes = CadClientes;
//# sourceMappingURL=CadClientes.js.map