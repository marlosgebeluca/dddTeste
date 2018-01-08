import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CadTelefones } from '../../../infra/models/cadTelefones/CadTelefones';

@Entity('Dados.CadClientes')
export class CadClientes {

  @PrimaryGeneratedColumn({ name: 'cli_codigo' })
  public cliCodigo: number;

  @OneToMany(type => CadTelefones, telefone => telefone.foneCodigo)
  public telefones: string[];

  @Column({ name: 'cli_nome', type: 'varchar', length: 200 })
  public cliNome: string;

  @Column({ name: 'cli_tipo_pessoa', type: 'varchar', length: 1 })
  public cliTipoPessoa: string;

  @Column({ name: 'cli_cpf_cnpj', type: 'varchar', length: 18 })
  public cliCpfCnpj: string;

  @Column({ name: 'cli_data_nascimento', type: 'date' })
  public cliDataNascimento: Date;
}
