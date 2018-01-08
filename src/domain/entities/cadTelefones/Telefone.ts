import { IsIn, IsBoolean } from 'class-validator';
import { TiposFone } from '../../enums/cadTelefones/TiposFone';

export class Telefone {
  public foneCodigo: number;

  public foneTabelaMaster: string;

  public foneCodigoMaster: number;

  public foneCodigoMaster2: number;

  public foneCodigoMaster3: number;

  public foneDDD: string;

  public foneNumero: string;

  @IsIn(TiposFone.foneTipos())
  public tpFoneCodigo: number;

  @IsBoolean()
  public fonePrincipal: string;

  public foneObeservacao: string;

  @IsBoolean()
  public foneRecebeSms: string;

}
