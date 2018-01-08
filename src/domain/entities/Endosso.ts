import { IsIn, IsBoolean, IsOptional } from 'class-validator';
import { TiposComissao } from '../enums/TiposComissao';
import { TiposApolice } from '../enums/TiposApolice';
import { TiposSituacaoApolice } from '../enums/TiposSituacaoApolice';
import { TiposPagamento } from '../enums/TiposPagamento';
import { IsValidDate } from '../validators/IsValidDate';
import { TiposEndosso } from '../enums/TiposEndosso';
import { ExisteApolice } from '../validators/ExisteApolice';

export class Endosso implements IEndosso {
  public docNumProposta: number;
  @IsIn(TiposEndosso.endossoTipos())
  public docTipoMovto: string;
  @ExisteApolice()
  public docPropApolice: number;
  public numeroEndosso: string;
  public docEndosso2: string;
  public flgProbEndosso: string;
  @IsOptional()
  public endossos: IEndosso[];
  public cliCodigo: number;
  public ciaCodigo: number;
  public ramoCodigo: number;
  public ptoCodigo: number;
  public docApolice: string;
  @IsValidDate()
  public docDataProposta: Date;
  @IsValidDate()
  public docDataEmissao: Date;
  @IsValidDate()
  public docDataEntrada: Date;
  @IsValidDate()
  public docInicioVigencia: Date;
  @IsValidDate()
  public docFinalVigencia: Date;
  public docQtdParcelas: number;
  @IsIn(TiposSituacaoApolice.situacoesTipos())
  public docSituacao: string;
  public docRenovNumero: string;
  public ciaCodigoRenov: number;
  public docAnotacoes: string;
  @IsBoolean()
  public docComissAdic: boolean;
  public docPropUltMov: number;
  @IsIn(TiposComissao.comissaoCodigo())
  public docTipoComiss: string;
  public docAgenciaDebito: string;
  @IsBoolean()
  public docPrimeiraAVista: string;
  public cliCodigoEstipulante: number;
  @IsIn(TiposPagamento.pagamentoTipos())
  public docFormaPagamento: string;
  public cliCodigoSubestipulante: number;
  @IsBoolean()
  public docRenovacaoInterna: string;
  public docControle: string;
  public docBonusIndicacao: number;
  public ciaRegCodigo: number;
  public moedaCodigo: number;
  @IsValidDate()
  public cotacData: Date;
  public docAdicionalFrac: number;
  public docCusto: number;
  public cliCodigoIndicacao: number;
  public docIof: number;
  public docPremioTotal: number;
  @IsValidDate()
  public docDataEnvioProposta: Date;
  public docPercComissao: number;
  public estrutCodigo: number;
  public docPercComissaoExtra: number;
  public docComissao: number;
  public sitrenCodigo: number;
  public docPercComissaoTotal: number;
  @IsOptional()
  @IsValidDate()
  public docDataDistrenov: Date;
  public docDescComissao: number;
  public rrepCodigo: number;
  public docMesBaseRenovacao: string;
  public docContaDebito: string;
  @IsIn(TiposApolice.apoliceTipos())
  public docTipoApolice: string;
  public docPremioServicoAdic: number;
  public docApolice2: string;
  public docPrimeiraParcela: number;
  public tpMovCodigo: number;
  public bcoCodigoDebito: string;
  public audInclusaoUsr: string;
  @IsValidDate()
  public audInclusaoData: Date;
  public audAlteracaoUsr: string;
  @IsOptional()
  @IsValidDate()
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
  @IsValidDate()
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
