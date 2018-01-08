"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Condutor_1 = require("../condutor/Condutor");
const CalculoSeguradora_1 = require("../calculoSeguradora/CalculoSeguradora");
let Calculo = class Calculo {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'calc_numero' }),
    tslib_1.__metadata("design:type", Number)
], Calculo.prototype, "calcNumero", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_tipo', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "tipo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_vigencia', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], Calculo.prototype, "vigencia", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_condutor_inteterminado', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "condutorIndeterminado", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_renov_cia_anterior', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], Calculo.prototype, "renovSeguradoraAnterior", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_renov_vigencia_anterior', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], Calculo.prototype, "renovVigenciaAnterior", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_renov_apolice_anterior', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "renovApoliceAnterior", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_seg_tipo_pessoa', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "segTipoPessoa", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_seg_cpf_cnpj', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "segCpfCnpj", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_seg_nome', type: 'varchar', length: 200 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "segNome", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_seg_sexo', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "segSexo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_seg_email', type: 'varchar', length: 200 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "segEmail", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_seg_fone', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "segTelefone", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_prop_tipo_pessoa', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "propTipoPessoa", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_prop_cpf_cnpj', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "propCpfCnpj", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_prop_nome', type: 'varchar', length: 200 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "propNome", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_prop_sexo', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "propSexo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_prop_nascimento', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], Calculo.prototype, "propNascimento", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_prop_vinculo_seg', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], Calculo.prototype, "propVinculoSegurado", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_veic_fipe', type: 'varchar', length: 10 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "veicFipe", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_veic_ano_modelo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], Calculo.prototype, "veicAnoModelo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_veic_marca', type: 'varchar', length: 100 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "veicMarca", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_veic_modelo', type: 'varchar', length: 200 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "veicModelo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_veic_placa', type: 'varchar', length: 10 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "veicPlaca", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_veic_chassi', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "veicChassi", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_veic_combustivel', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], Calculo.prototype, "veicCombustivel", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_veic_zero_km', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], Calculo.prototype, "veicZeroKm", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calc_veic_lotacao', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], Calculo.prototype, "veicLotacao", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => Condutor_1.Condutor, condutor => condutor.calculo, { cascade: true }),
    tslib_1.__metadata("design:type", Array)
], Calculo.prototype, "condutores", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => CalculoSeguradora_1.CalculoSeguradora, seguradora => seguradora.calculo, { cascade: true }),
    tslib_1.__metadata("design:type", Array)
], Calculo.prototype, "seguradoras", void 0);
Calculo = tslib_1.__decorate([
    typeorm_1.Entity('Dados.Calculo')
], Calculo);
exports.Calculo = Calculo;
//# sourceMappingURL=Calculo.js.map