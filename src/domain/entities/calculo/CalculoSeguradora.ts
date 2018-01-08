import { IsIn, IsBoolean, IsNumber } from 'class-validator';
import { Seguradoras } from '../../enums/Seguradoras';

export class CalculoSeguradora {
  @IsIn(Seguradoras.seguradorasEnum())
  public seguradora: number;

  @IsBoolean()
  public calcula: boolean;

  @IsNumber()
  public assistencia: number;

  @IsNumber()
  public carroReserva: number;

  @IsNumber()
  public vidros: number;

  @IsNumber()
  public percComissao: number;
}
