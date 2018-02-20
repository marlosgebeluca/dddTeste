// import { IsIn, IsBoolean, IsOptional, IsNumber, MinLength, MaxLength} from 'class-validator';
import { IsIn, IsBoolean, IsOptional, IsNumber} from 'class-validator';
import * as CustomEnum from '../enums/CustomEnums';
import * as CustomValidator from '../validators/CustomValidator';
import { Label, TamanhoX, TamanhoY, Hide, TipoCampo, CampoPersonalizado, ApareceRelacao } from '../decorators/CustomDecorator';

export class Apolice implements IApolice {
  @Label('Numero da Proposta')
  @TamanhoX(20)
  @TamanhoY(20)
  @TipoCampo('select')
  @Hide(true)
  public docNumProposta: number;

  @IsOptional()
  public endossos: IEndosso[];

  @IsNumber()
  @Label('Código do cliente')
  @TamanhoX(10)
  @TamanhoY(10)
  @TipoCampo('select')
  @CampoPersonalizado(true)
  @Hide('docNumProposta < 0')
  @ApareceRelacao(true)
  public cliCodigo: number;

  @IsOptional()
  @CustomValidator.IsValidCia()
  @IsNumber()
  public ciaCodigo: number;

  @IsOptional()
  @CustomValidator.IsValidRamo()
  @IsNumber()
  public ramoCodigo: number;

  @IsOptional()
  @CustomValidator.IsValidPtoVenda()
  @IsNumber()
  public ptoCodigo: number;

  @IsOptional()
  @CustomValidator.IsValidDocApolice()
  public docApolice: string;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public docDataProposta: Date;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public docDataEmissao: Date;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public docDataEntrada: Date;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public docInicioVigencia: Date;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public docFinalVigencia: Date;

  @IsOptional()
  @CustomValidator.IsValidQtdParcelas()
  public docQtdParcelas: number;

  @IsOptional()
  @IsIn(CustomEnum.TiposSituacaoApolice.situacoesTipos())
  public docSituacao: string;

  @IsOptional()
  public docRenovNumero: string;

  @IsOptional()
  public ciaCodigoRenov: number;

  @IsOptional()
  public docAnotacoes: string;

  @IsOptional()
  @IsBoolean()
  public docComissAdic: boolean;

  @IsOptional()
  public docPropUltMov: number;

  @IsOptional()
  @IsIn(CustomEnum.TiposComissao.comissaoCodigo())
  public docTipoComiss: string;

  @IsOptional()
  public docAgenciaDebito: string;

  @IsOptional()
  @IsBoolean()
  public docPrimeiraAVista: string;

  @IsOptional()
  public cliCodigoEstipulante: number;

  @IsOptional()
  @IsIn(CustomEnum.TiposPagamento.pagamentoTipos())
  public docFormaPagamento: string;

  @IsOptional()
  public cliCodigoSubestipulante: number;

  @IsOptional()
  @IsBoolean()
  public docRenovacaoInterna: string;

  @IsOptional()
  public docControle: string;

  @IsOptional()
  public docBonusIndicacao: number;

  @IsOptional()
  public ciaRegCodigo: number;

  @IsOptional()
  public moedaCodigo: number;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public cotacData: Date;

  @IsOptional()
  public docAdicionalFrac: number;

  @IsOptional()
  public docCusto: number;

  @IsOptional()
  public cliCodigoIndicacao: number;

  @IsOptional()
  public docIof: number;

  @IsOptional()
  public docPremioTotal: number;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public docDataEnvioProposta: Date;

  @IsOptional()
  public docPercComissao: number;

  @IsOptional()
  public estrutCodigo: number;

  @IsOptional()
  public docPercComissaoExtra: number;

  @IsOptional()
  public docComissao: number;

  @IsOptional()
  public sitrenCodigo: number;

  @IsOptional()
  public docPercComissaoTotal: number;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public docDataDistrenov: Date;

  @IsOptional()
  public docDescComissao: number;

  @IsOptional()
  public rrepCodigo: number;

  @IsOptional()
  public docMesBaseRenovacao: string;

  @IsOptional()
  public docContaDebito: string;

  @IsIn(CustomEnum.TiposApolice.apoliceTipos())
  public docTipoApolice: string;

  @IsOptional()
  public docPremioServicoAdic: number;

  @IsOptional()
  public docApolice2: string;

  @IsOptional()
  public docPrimeiraParcela: number;

  @IsOptional()
  public tpMovCodigo: number;

  @IsOptional()
  public bcoCodigoDebito: string;

  @IsOptional()
  public audInclusaoUsr: string;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public audInclusaoData: Date;

  @IsOptional()
  public audAlteracaoUsr: string;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public audAlteracaoData: Date;

  @IsOptional()
  public docTipo6: string;

  @IsOptional()
  public docNumProposta6: number;

  @IsOptional()
  public docComissaoOriginal: number;

  @IsOptional()
  public docCodigoOrigem: string;

  @IsOptional()
  public docIdentificacao: string;

  @IsOptional()
  public docIntervaloVenc: number;

  @IsOptional()
  public docArquivoNumero: string;

  @IsOptional()
  @IsBoolean()
  public docSigiloso: string;

  @IsOptional()
  public docPremioLiquidoOriginal: number;

  @IsOptional()
  public docAdicionalFracOriginal: number;

  @IsOptional()
  public docLivroNumeroSusep: number;

  @IsOptional()
  public docLivroPaginaSusep: number;

  @IsOptional()
  public docLivroRegistroSusep: number;

  @IsOptional()
  public ciaCodigoOriginal: number;

  @IsOptional()
  public ptoCodigoOriginal: number;

  @IsOptional()
  public ramoCodigoOriginal: number;

  @IsOptional()
  public vendCodigosOriginal: string;

  @IsOptional()
  public ccoCodigosOriginal: string;

  @IsOptional()
  public docoriCodigo: number;

  @IsOptional()
  public cnCodigo: number;

  @IsOptional()
  public CliDivCodigo: number;

  @IsOptional()
  @CustomValidator.IsValidDate()
  public docDataRecusa: Date;

  @IsOptional()
  public tpmovCodigoRecusa: number;

  @IsOptional()
  public docCedenteBoleto: number;

  @IsOptional()
  public docCodigoNegociacao: string;

  @IsOptional()
  public docDiaVencimento: number;

  @IsOptional()
  @IsBoolean()
  public docComissOutrosServicos: string;

  @IsOptional()
  public docNumPropRenovada: number;

  @IsOptional()
  @IsBoolean()
  public docGeracaoAutomatica: string;

  @IsOptional()
  public numPedido: number;

  @IsOptional()
  public numSequencia: number;
}
