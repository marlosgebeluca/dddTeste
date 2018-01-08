"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateCadClientesTable1514285844914 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`create table Dados.CadClientes(
            cli_codigo int identity not null primary key,
            cli_nome varchar(200) null,
            cli_tipo_pessoa varchar(1) null,
            cli_cpf_cnpj varchar(18) null,
            cli_data_nascimento datetime null
        );`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`drop table Dados.CadClientes;`);
        });
    }
}
exports.CreateCadClientesTable1514285844914 = CreateCadClientesTable1514285844914;
//# sourceMappingURL=1514285844914-CreateCadClientesTable.js.map