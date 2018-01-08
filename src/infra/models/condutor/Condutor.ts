import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Calculo } from '../calculo/Calculo';

@Entity('Dados.CalculoCondutor')
export class Condutor {
  @PrimaryGeneratedColumn()
  public codigo: number;

  @Column({ name: 'condutor_principal', type: 'char', length: 1 })
  public condutorPrincipal: string;

  @Column({ type: 'varchar', length: 200 })
  public nome: string;

  @Column({ type: 'char', length: 1 })
  public sexo: string;

  @Column({ name: 'cpf_cnpj', type: 'varchar', length: 20 })
  public cpfCnpj: string;

  @Column({ name: 'data_nascimento', type: 'date' })
  public nascimento: Date;

  @Column({ name: 'relacao_seg', type: 'int' })
  public relacaoSegurado: number;

  @ManyToOne(type => Calculo, calculo => calculo.condutores)
  @JoinColumn({ name: 'calc_numero' })
  public calculo: Calculo;
}
