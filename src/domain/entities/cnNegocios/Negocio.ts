import { IsValidDate } from '../../validators/IsValidDate';

export class Negocio {
  public cnCodigo: number;

  public cliCodigo: number;

  public cnNome: string;

  public cnTipoPessoa: string;

  public cnCpfCnpj: string;

  @IsValidDate()
  public cnDataNascimento: Date;

}
