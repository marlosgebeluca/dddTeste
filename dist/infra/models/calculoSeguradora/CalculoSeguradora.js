"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Calculo_1 = require("../calculo/Calculo");
let CalculoSeguradora = class CalculoSeguradora {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cia_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "seguradora", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'calcula', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], CalculoSeguradora.prototype, "calcula", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cob_assistencia', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "assistencia", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cob_carro_reserva', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "carroReserva", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cob_vidros', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "vidros", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'perc_comissao', type: 'decimal', scale: 2, precision: 4 }),
    tslib_1.__metadata("design:type", Number)
], CalculoSeguradora.prototype, "percComissao", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => Calculo_1.Calculo, calculo => calculo.seguradoras),
    typeorm_1.JoinColumn({ name: 'calc_numero' }),
    tslib_1.__metadata("design:type", Calculo_1.Calculo)
], CalculoSeguradora.prototype, "calculo", void 0);
CalculoSeguradora = tslib_1.__decorate([
    typeorm_1.Entity('Dados.CalculoSeguradora')
], CalculoSeguradora);
exports.CalculoSeguradora = CalculoSeguradora;
//# sourceMappingURL=CalculoSeguradora.js.map