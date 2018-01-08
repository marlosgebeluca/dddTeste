"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class CreateCnNegociosTable1514285844915 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`create table Dados.CnNegocios(
            cn_codigo int identity not null primary key,
            cli_codigo int null,
            cn_nome varchar(200) null,
            cn_tipo_pessoa varchar(1) null,
            cn_cpf_cnpj varchar(18) null,
            cn_data_nascimento datetime null,
            constraint fk_cnnegocio_cliente foreign key(cli_codigo) references Dados.CadClientes(cli_codigo)
        );`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`drop table Dados.CnNegocios;`);
        });
    }
}
exports.CreateCnNegociosTable1514285844915 = CreateCnNegociosTable1514285844915;
//# sourceMappingURL=1514285844915-CreateCnNegociosTable.js.map