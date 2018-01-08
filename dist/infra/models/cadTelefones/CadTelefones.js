"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let CadTelefones = class CadTelefones {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'fone_codigo' }),
    tslib_1.__metadata("design:type", Number)
], CadTelefones.prototype, "foneCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'fone_tabela_master', type: 'varchar', length: 50 }),
    tslib_1.__metadata("design:type", String)
], CadTelefones.prototype, "foneTabelaMaster", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'fone_codigo_master', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], CadTelefones.prototype, "foneCodigoMaster", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'fone_codigo_master2', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], CadTelefones.prototype, "foneCodigoMaster2", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'fone_codigo_master3', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], CadTelefones.prototype, "foneCodigoMaster3", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'fone_ddd', type: 'varchar', length: 4 }),
    tslib_1.__metadata("design:type", String)
], CadTelefones.prototype, "foneDDD", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'fone_numero', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], CadTelefones.prototype, "foneNumero", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'tpfone_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], CadTelefones.prototype, "tpFoneCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'fone_principal', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], CadTelefones.prototype, "fonePrincipal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'fone_observacao', type: 'varchar', length: 50 }),
    tslib_1.__metadata("design:type", String)
], CadTelefones.prototype, "foneObeservacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'fone_recebe_sms', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], CadTelefones.prototype, "foneRecebeSms", void 0);
CadTelefones = tslib_1.__decorate([
    typeorm_1.Entity('Dados.CadTelefones')
], CadTelefones);
exports.CadTelefones = CadTelefones;
//# sourceMappingURL=CadTelefones.js.map