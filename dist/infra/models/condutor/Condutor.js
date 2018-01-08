"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Calculo_1 = require("../calculo/Calculo");
let Condutor = class Condutor {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Condutor.prototype, "codigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'condutor_principal', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], Condutor.prototype, "condutorPrincipal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'varchar', length: 200 }),
    tslib_1.__metadata("design:type", String)
], Condutor.prototype, "nome", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], Condutor.prototype, "sexo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cpf_cnpj', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], Condutor.prototype, "cpfCnpj", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'data_nascimento', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], Condutor.prototype, "nascimento", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'relacao_seg', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], Condutor.prototype, "relacaoSegurado", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => Calculo_1.Calculo, calculo => calculo.condutores),
    typeorm_1.JoinColumn({ name: 'calc_numero' }),
    tslib_1.__metadata("design:type", Calculo_1.Calculo)
], Condutor.prototype, "calculo", void 0);
Condutor = tslib_1.__decorate([
    typeorm_1.Entity('Dados.CalculoCondutor')
], Condutor);
exports.Condutor = Condutor;
//# sourceMappingURL=Condutor.js.map