import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaDados1512960732842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`create schema Dados;`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`drop schema Dados;`);
    }

}
