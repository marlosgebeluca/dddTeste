import { IsValidDate } from '../../validators/IsValidDate';

export class Cliente {
  public cliCodigo: number;

  public cliNome: string;

  public cliTipoPessoa: string;

  public cliCpfCnpj: string;

  @IsValidDate()
  public cliDataNascimento: Date;

}
