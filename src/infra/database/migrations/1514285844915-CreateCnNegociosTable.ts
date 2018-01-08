import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCnNegociosTable1514285844915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`create table Dados.CnNegocios(
            cn_codigo int identity not null primary key,
            cli_codigo int null,
            cn_nome varchar(200) null,
            cn_tipo_pessoa varchar(1) null,
            cn_cpf_cnpj varchar(18) null,
            cn_data_nascimento datetime null,
            constraint fk_cnnegocio_cliente foreign key(cli_codigo) references Dados.CadClientes(cli_codigo)
        );`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`drop table Dados.CnNegocios;`);
    }

}
