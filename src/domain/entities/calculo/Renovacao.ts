import { IsIn, IsDate, IsOptional } from 'class-validator';
import { Seguradoras } from '../../enums/Seguradoras';

export class Renovacao {
  @IsOptional()
  @IsIn(Seguradoras.seguradorasAtivasEnum())
  public seguradoraAnterior: number;

  @IsDate()
  public vigenciaAnterior: Date;

  @IsOptional()
  public apoliceAnterior: string;
}
