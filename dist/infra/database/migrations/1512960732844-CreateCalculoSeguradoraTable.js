"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateCalculoSeguradora1512960732844 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`create table Dados.CalculoSeguradora (
      id int identity not null primary key,
      calc_numero int not null,
      cia_codigo int null,
      calcula char(1) null,
      cob_assistencia int null,
      cob_carro_reserva int null,
      cob_vidros int null,
      perc_comissao decimal(4, 2) null,
      constraint fk_calculo_seguradora foreign key(calc_numero) references Dados.Calculo(calc_numero)
    )`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`drop table Dados.CalculoSeguradora;`);
        });
    }
}
exports.CreateCalculoSeguradora1512960732844 = CreateCalculoSeguradora1512960732844;
//# sourceMappingURL=1512960732844-CreateCalculoSeguradoraTable.js.map