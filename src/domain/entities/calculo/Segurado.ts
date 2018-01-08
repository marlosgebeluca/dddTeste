import { IsIn, IsEmail, IsOptional, IsString } from 'class-validator';
import { IsValidCpfCnpj } from '../../validators/IsValidCpfCnpj';

export class Segurado {
  @IsIn(['F', 'J'])
  public tipoPessoa: string;

  @IsValidCpfCnpj()
  public cpfCnpj: string;

  @IsString()
  public nome: string;

  @IsIn(['M', 'F'])
  public sexo: string;

  @IsOptional()
  @IsEmail()
  public email: string;

  @IsOptional()
  public telefone: string;
}
