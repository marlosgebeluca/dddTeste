import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCalculoTable1512960732843 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`create table Dados.Calculo (
      calc_numero int identity not null primary key,
      calc_tipo char(1) null,
      calc_vigencia date null,
      calc_condutor_inteterminado char(1) null,
      calc_renov_cia_anterior int null,
      calc_renov_vigencia_anterior date null,
      calc_renov_apolice_anterior varchar(20) null,
      calc_seg_tipo_pessoa char(1) null,
      calc_seg_cpf_cnpj varchar(20) null,
      calc_seg_nome varchar(200) null,
      calc_seg_sexo char(1) null,
      calc_seg_email varchar(200) null,
      calc_seg_fone varchar(20) null,
      calc_prop_cpf_cnpj varchar(20) null,
      calc_prop_nome varchar(200) null,
      calc_prop_nascimento date null,
      calc_prop_sexo char(1) null,
      calc_prop_vinculo_seg int null,
      calc_veic_fipe varchar(10) null,
      calc_veic_ano_modelo int null,
      calc_veic_marca varchar(100) null,
      calc_veic_modelo varchar(200) null,
      calc_veic_placa varchar(10) null,
      calc_veic_chassi varchar(20) null,
      calc_veic_combustivel int null,
      calc_veic_zero_km char(1) null,
      calc_veic_lotacao int null,
      calc_prop_tipo_pessoa char(1) null
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`drop table Dados.Calculo;`);
  }

}
