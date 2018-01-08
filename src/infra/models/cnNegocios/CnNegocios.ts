import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Dados.CnNegocios')
export class CnNegocios {

  @PrimaryGeneratedColumn({ name: 'cn_codigo' })
  public cnCodigo: number;

  @Column({ name: 'cli_codigo', type: 'int' })
  public cliCodigo: number;

  @Column({ name: 'cn_nome', type: 'varchar', length: 200 })
  public cnNome: string;

  @Column({ name: 'cn_tipo_pessoa', type: 'varchar', length: 1 })
  public cnTipoPessoa: string;

  @Column({ name: 'cn_cpf_cnpj', type: 'varchar', length: 18 })
  public cnCpfCnpj: string;

  @Column({ name: 'cn_data_nascimento', type: 'date' })
  public cnDataNascimento: Date;

}
