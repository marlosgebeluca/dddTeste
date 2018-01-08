import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Condutor } from '../condutor/Condutor';
import { CalculoSeguradora } from '../calculoSeguradora/CalculoSeguradora';

@Entity('Dados.Calculo')
export class Calculo {
  @PrimaryGeneratedColumn({ name: 'calc_numero' })
  public calcNumero: number;

  @Column({ name: 'calc_tipo', type: 'char', length: 1})
  public tipo: string;

  @Column({ name: 'calc_vigencia', type: 'date' })
  public vigencia: Date;

  @Column({ name: 'calc_condutor_inteterminado', type: 'char', length: 1 })
  public condutorIndeterminado: string;

  @Column({ name: 'calc_renov_cia_anterior', type: 'int' })
  public renovSeguradoraAnterior: number;

  @Column({ name: 'calc_renov_vigencia_anterior', type: 'date' })
  public renovVigenciaAnterior: Date;

  @Column({ name: 'calc_renov_apolice_anterior', type: 'varchar', length: 20 })
  public renovApoliceAnterior: string;

  @Column({ name: 'calc_seg_tipo_pessoa', type: 'char', length: 1 })
  public segTipoPessoa: string;

  @Column({ name: 'calc_seg_cpf_cnpj', type: 'varchar', length: 20 })
  public segCpfCnpj: string;

  @Column({ name: 'calc_seg_nome', type: 'varchar', length: 200 })
  public segNome: string;

  @Column({ name: 'calc_seg_sexo', type: 'char', length: 1})
  public segSexo: string;

  @Column({ name: 'calc_seg_email', type: 'varchar', length: 200 })
  public segEmail: string;

  @Column({ name: 'calc_seg_fone', type: 'varchar', length: 20 })
  public segTelefone: string;

  @Column({ name: 'calc_prop_tipo_pessoa', type: 'char', length: 1 })
  public propTipoPessoa: string;

  @Column({ name: 'calc_prop_cpf_cnpj', type: 'varchar', length: 20 })
  public propCpfCnpj: string;

  @Column({ name: 'calc_prop_nome', type: 'varchar', length: 200 })
  public propNome: string;

  @Column({ name: 'calc_prop_sexo', type: 'char', length: 1})
  public propSexo: string;

  @Column({ name: 'calc_prop_nascimento', type: 'date' })
  public propNascimento: Date;

  @Column({ name: 'calc_prop_vinculo_seg', type: 'int' })
  public propVinculoSegurado: number;

  @Column({ name: 'calc_veic_fipe', type: 'varchar', length: 10 })
  public veicFipe: string;

  @Column({ name: 'calc_veic_ano_modelo', type: 'int' })
  public veicAnoModelo: number;

  @Column({ name: 'calc_veic_marca', type: 'varchar', length: 100 })
  public veicMarca: string;

  @Column({ name: 'calc_veic_modelo', type: 'varchar', length: 200 })
  public veicModelo: string;

  @Column({ name: 'calc_veic_placa', type: 'varchar', length: 10 })
  public veicPlaca: string;

  @Column({ name: 'calc_veic_chassi', type: 'varchar', length: 20})
  public veicChassi: string;

  @Column({ name: 'calc_veic_combustivel', type: 'int' })
  public veicCombustivel: number;

  @Column({ name: 'calc_veic_zero_km', type: 'char', length: 1 })
  public veicZeroKm: string;

  @Column({ name: 'calc_veic_lotacao', type: 'int' })
  public veicLotacao: number;

  @OneToMany(type => Condutor, condutor => condutor.calculo, { cascade: true })
  public condutores: Condutor[];

  @OneToMany(type => CalculoSeguradora, seguradora => seguradora.calculo, { cascade: true })
  public seguradoras: CalculoSeguradora[];
}
