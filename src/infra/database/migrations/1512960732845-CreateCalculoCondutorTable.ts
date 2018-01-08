import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCalculoCondutorTable1512960732845 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`create table Dados.CalculoCondutor (
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
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`drop table Dados.CalculoCondutor;`);
  }

}
