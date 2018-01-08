// import { IsIn, IsBoolean, IsOptional, IsNumber, MinLength, MaxLength} from 'class-validator';
import { IsIn, IsBoolean, IsOptional, IsNumber} from 'class-validator';
import * as CustomEnum from '../enums/CustomEnums';
import * as CustomValidator from '../validators/CustomValidator';

export class Apolice implements IApolice {
  public docNumProposta: number;

  @IsOptional()
  public endossos: IEndosso[];

  @CustomValidator.IsValidCliente()
  @IsNumber()
  public cliCodigo: number;

  @CustomValidator.IsValidCia()
  @IsNumber()
  public ciaCodigo: number;

  @CustomValidator.IsValidRamo()
  @IsNumber()
  public ramoCodigo: number;

  @CustomValidator.IsValidPtoVenda()
  @IsNumber()
  public ptoCodigo: number;

  @CustomValidator.IsValidDocApolice()
  public docApolice: string;

  @CustomValidator.IsValidDate()
  public docDataProposta: Date;

  @CustomValidator.IsValidDate()
  public docDataEmissao: Date;

  @CustomValidator.IsValidDate()
  public docDataEntrada: Date;

  @CustomValidator.IsValidDate()
  public docInicioVigencia: Date;

  @CustomValidator.IsValidDate()
  public docFinalVigencia: Date;

  @CustomValidator.IsValidQtdParcelas()
  public docQtdParcelas: number;

  @IsIn(CustomEnum.TiposSituacaoApolice.situacoesTipos())
  public docSituacao: string;

  public docRenovNumero: string;
  public ciaCodigoRenov: number;
  public docAnotacoes: string;
  @IsBoolean()
  public docComissAdic: boolean;
  public docPropUltMov: number;
  @IsIn(CustomEnum.TiposComissao.comissaoCodigo())
  public docTipoComiss: string;
  public docAgenciaDebito: string;
  @IsBoolean()
  public docPrimeiraAVista: string;
  public cliCodigoEstipulante: number;
  @IsIn(CustomEnum.TiposPagamento.pagamentoTipos())
  public docFormaPagamento: string;
  public cliCodigoSubestipulante: number;
  @IsBoolean()
  public docRenovacaoInterna: string;
  public docControle: string;
  public docBonusIndicacao: number;
  public ciaRegCodigo: number;
  public moedaCodigo: number;
  @CustomValidator.IsValidDate()
  public cotacData: Date;
  public docAdicionalFrac: number;
  public docCusto: number;
  public cliCodigoIndicacao: number;
  public docIof: number;
  public docPremioTotal: number;
  @CustomValidator.IsValidDate()
  public docDataEnvioProposta: Date;
  public docPercComissao: number;
  public estrutCodigo: number;
  public docPercComissaoExtra: number;
  public docComissao: number;
  public sitrenCodigo: number;
  public docPercComissaoTotal: number;
  @IsOptional()
  @CustomValidator.IsValidDate()
  public docDataDistrenov: Date;
  public docDescComissao: number;
  public rrepCodigo: number;
  public docMesBaseRenovacao: string;
  public docContaDebito: string;
  @IsIn(CustomEnum.TiposApolice.apoliceTipos())
  public docTipoApolice: string;
  public docPremioServicoAdic: number;
  public docApolice2: string;
  public docPrimeiraParcela: number;
  public tpMovCodigo: number;
  public bcoCodigoDebito: string;
  public audInclusaoUsr: string;
  @CustomValidator.IsValidDate()
  public audInclusaoData: Date;
  public audAlteracaoUsr: string;
  @IsOptional()
  @CustomValidator.IsValidDate()
  public audAlteracaoData: Date;
  public docTipo6: string;
  public docNumProposta6: number;
  public docComissaoOriginal: number;
  public docCodigoOrigem: string;
  public docIdentificacao: string;
  public docIntervaloVenc: number;
  public docArquivoNumero: string;
  @IsOptional()
  @IsBoolean()
  public docSigiloso: string;
  public docPremioLiquidoOriginal: number;
  public docAdicionalFracOriginal: number;
  public docLivroNumeroSusep: number;
  public docLivroPaginaSusep: number;
  public docLivroRegistroSusep: number;
  public ciaCodigoOriginal: number;
  public ptoCodigoOriginal: number;
  public ramoCodigoOriginal: number;
  public vendCodigosOriginal: string;
  public ccoCodigosOriginal: string;
  public docoriCodigo: number;
  public cnCodigo: number;
  public CliDivCodigo: number;
  @CustomValidator.IsValidDate()
  public docDataRecusa: Date;
  public tpmovCodigoRecusa: number;
  public docCedenteBoleto: number;
  public docCodigoNegociacao: string;
  public docDiaVencimento: number;
  @IsOptional()
  @IsBoolean()
  public docComissOutrosServicos: string;
  public docNumPropRenovada: number;
  @IsOptional()
  @IsBoolean()
  public docGeracaoAutomatica: string;
  public numPedido: number;
  public numSequencia: number;
}
