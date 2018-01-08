import { IsIn, IsBoolean, IsOptional, IsDefined, ArrayNotEmpty } from 'class-validator';
import { Renovacao } from './Renovacao';
import { Segurado } from './Segurado';
import { Proprietario } from './Proprietario';
import { Veiculo } from './Veiculo';
import { Condutor } from './Condutor';
import { IsValidDate } from '../../validators/IsValidDate';
import { CalculoSeguradora } from './CalculoSeguradora';

export class Calculo {
  public calcNumero: number;

  @IsIn(['N', 'R'])
  public tipo: string;

  @IsValidDate()
  public vigencia: Date;

  @IsBoolean()
  public condutorIndeterminado: boolean;

  @IsOptional()
  public renovacao: Renovacao;

  @IsDefined()
  public segurado: Segurado;

  @IsDefined()
  public proprietario: Proprietario;

  @IsDefined()
  public veiculo: Veiculo;

  @IsOptional()
  public condutores: Condutor[];

  @IsDefined()
  @ArrayNotEmpty()
  public seguradoras: CalculoSeguradora[];
}
