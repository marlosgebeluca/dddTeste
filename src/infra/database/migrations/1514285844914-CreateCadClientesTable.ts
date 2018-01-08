import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateCadClientesTable1514285844914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`create table Dados.CadClientes(
            cli_codigo int identity not null primary key,
            cli_nome varchar(200) null,
            cli_tipo_pessoa varchar(1) null,
            cli_cpf_cnpj varchar(18) null,
            cli_data_nascimento datetime null
        );`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`drop table Dados.CadClientes;`);
    }

}
