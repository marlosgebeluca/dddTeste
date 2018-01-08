// import { Max, Matches, IsOptional, IsIn, IsBoolean, IsNumber, IsString } from 'class-validator';
import { Max, IsOptional, IsIn, IsBoolean, IsNumber, IsString } from 'class-validator';
import { Combustiveis } from '../../enums/Combustiveis';
import { IsValidPlaca } from '../../validators/IsValidPlaca';

const ANO_MAXIMO: number = (new Date()).getFullYear() + 1;

export class Veiculo {
  @IsString()
  public fipe: string;

  @IsNumber()
  @Max(ANO_MAXIMO)
  public anoModelo: number;

  @IsString()
  public marca: string;

  @IsString()
  public modelo: string;

  @IsOptional()
  @IsString()
  // @Matches(/([a-zA-Z]{3}\-\d{4})/g)
  @IsValidPlaca()
  public placa: string;

  @IsOptional()
  @IsString()
  public chassi: string;

  @IsOptional()
  @IsIn(Combustiveis.combustiveisEnum())
  public combustivel: number;

  @IsBoolean()
  public zeroKm: boolean;

  @IsNumber()
  public lotacao: number;
}
