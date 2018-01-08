"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateCadTelefonesTable1514285844916 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`create table Dados.CadTelefones(
            fone_codigo int identity not null primary key,
            fone_tabela_master varchar(50) not null,
            fone_codigo_master int not null,
            fone_codigo_master2 int not null default ((0)),
            fone_codigo_master3 int not null default ((0)),
            fone_ddd varchar(4) null,
            fone_numero varchar(20) null,
            tpfone_codigo int null,
            fone_principal varchar(1) null,
            fone_observacao varchar(50) null,
            fone_recebe_sms varchar(1) null
        );`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`drop table Dados.CadTelefones;`);
        });
    }
}
exports.CreateCadTelefonesTable1514285844916 = CreateCadTelefonesTable1514285844916;
//# sourceMappingURL=1514285844916-CreateCadTelefonesTable.js.map