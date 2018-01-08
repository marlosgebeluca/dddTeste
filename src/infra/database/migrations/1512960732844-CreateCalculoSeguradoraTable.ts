import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCalculoSeguradora1512960732844 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`create table Dados.CalculoSeguradora (
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
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`drop table Dados.CalculoSeguradora;`);
  }

}
