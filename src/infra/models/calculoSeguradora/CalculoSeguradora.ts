import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Calculo } from '../calculo/Calculo';

@Entity('Dados.CalculoSeguradora')
export class CalculoSeguradora {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'cia_codigo', type: 'int' })
  public seguradora: number;

  @Column({ name: 'calcula', type: 'char', length: 1})
  public calcula: string;

  @Column({ name: 'cob_assistencia', type: 'int' })
  public assistencia: number;

  @Column({ name: 'cob_carro_reserva', type: 'int' })
  public carroReserva: number;

  @Column({ name: 'cob_vidros', type: 'int' })
  public vidros: number;

  @Column({ name: 'perc_comissao', type: 'decimal', scale: 2, precision: 4})
  public percComissao: number;

  @ManyToOne(type => Calculo, calculo => calculo.seguradoras)
  @JoinColumn({ name: 'calc_numero' })
  public calculo: Calculo;
}
