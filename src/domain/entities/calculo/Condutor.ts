import { IsIn, IsDate, IsBoolean, IsString } from 'class-validator';
import { IsValidCpfCnpj } from '../../validators/IsValidCpfCnpj';
import { VinculosSegurado } from '../../enums/VinculosSegurado';

export class Condutor {
  @IsBoolean()
  public condutorPrincipal: boolean;

  @IsString()
  public nome: string;

  @IsIn(['M', 'F'])
  public sexo: string;

  @IsValidCpfCnpj()
  public cpfCnpj: string;

  @IsDate()
  public nascimento: Date;

  @IsIn(VinculosSegurado.vinculosEnum())
  public relacaoSegurado: number;
}
