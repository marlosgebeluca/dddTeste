"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateCalculoCondutorTable1512960732845 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`create table Dados.CalculoCondutor (
      codigo int not null identity primary key,
      condutor_principal char(1) null,
      nome varchar(200) null,
      sexo char(1) null,
      cpf_cnpj varchar(20) null,
      data_nascimento date null,
      relacao_seg int null,
      calc_numero int not null,
      constraint fk_calculo_condutor foreign key(calc_numero) references Dados.Calculo(calc_numero)
    )`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`drop table Dados.CalculoCondutor;`);
        });
    }
}
exports.CreateCalculoCondutorTable1512960732845 = CreateCalculoCondutorTable1512960732845;
//# sourceMappingURL=1512960732845-CreateCalculoCondutorTable.js.map