import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Dados.CadTelefones')
export class CadTelefones {
  @PrimaryGeneratedColumn({ name: 'fone_codigo' })
  public foneCodigo: number;

  @Column({ name: 'fone_tabela_master', type: 'varchar', length: 50 })
  public foneTabelaMaster: string;

  @Column({ name: 'fone_codigo_master', type: 'int' })
  public foneCodigoMaster: number;

  @Column({ name: 'fone_codigo_master2', type: 'int' })
  public foneCodigoMaster2: number;

  @Column({ name: 'fone_codigo_master3', type: 'int' })
  public foneCodigoMaster3: number;

  @Column({ name: 'fone_ddd', type: 'varchar', length: 4 })
  public foneDDD: string;

  @Column({ name: 'fone_numero', type: 'varchar', length: 20 })
  public foneNumero: string;

  @Column({ name: 'tpfone_codigo', type: 'int' })
  public tpFoneCodigo: number;

  @Column({ name: 'fone_principal', type: 'varchar', length: 1 })
  public fonePrincipal: string;

  @Column({ name: 'fone_observacao', type: 'varchar', length: 50 })
  public foneObeservacao: string;

  @Column({ name: 'fone_recebe_sms', type: 'varchar', length: 1 })
  public foneRecebeSms: string;

}
