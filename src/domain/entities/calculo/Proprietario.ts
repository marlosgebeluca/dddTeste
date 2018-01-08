import { IsIn, IsDate, IsString } from 'class-validator';
import { IsValidCpfCnpj } from '../../validators/IsValidCpfCnpj';
import { VinculosSegurado } from '../../enums/VinculosSegurado';

export class Proprietario {
  @IsIn(['F', 'J'])
  public tipoPessoa: string;

  @IsValidCpfCnpj()
  public cpfCnpj: string;

  @IsString()
  public nome: string;

  @IsIn(['M', 'F'])
  public sexo: string;

  @IsDate()
  public nascimento: Date;

  @IsIn(VinculosSegurado.vinculosEnum())
  public vinculoSegurado: number;
}
