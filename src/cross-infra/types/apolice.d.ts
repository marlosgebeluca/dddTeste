interface IApoliceService extends ICrudService {
  /**
   * Renovar apólice
   */
  renovarApolice(docNumProposta: number): Promise<IApolice>;
  gerarEndosso(docNumProposta: number, endosso: IEndosso): Promise<IEndosso>;
  findEndossos(docNumProposta: number): Promise<void>;
}

interface IApoliceRepository extends ICrudRepository {
  findEndossos(docNumProposta: number): Promise<any>;
}

interface IApolice {
  docNumProposta?: number;
  endossos?: IEndosso[];
  cliCodigo?: number;
  ciaCodigo?: number;
  ramoCodigo?: number;
  ptoCodigo?: number;
  docApolice?: string;
  docDataProposta?: Date;
  docDataEmissao?: Date;
  docDataEntrada?: Date;
  docInicioVigencia?: Date;
  docFinalVigencia?: Date;
  docQtdParcelas?: number;
  docSituacao?: string;
  docRenovNumero?: string;
  ciaCodigoRenov?: number;
  docAnotacoes?: string;
  docPropUltMov?: number;
  docTipoComiss?: string;
  docAgenciaDebito?: string;
  docPrimeiraAVista?: string;
  cliCodigoEstipulante?: number;
  docFormaPagamento?: string;
  cliCodigoSubestipulante?: number;
  docRenovacaoInterna?: string;
  docControle?: string;
  docBonusIndicacao?: number;
  ciaRegCodigo?: number;
  moedaCodigo?: number;
  cotacData?: Date;
  docAdicionalFrac?: number;
  docCusto?: number;
  cliCodigoIndicacao?: number;
  docIof?: number;
  docPremioTotal?: number;
  docDataEnvioProposta?: Date;
  docPercComissao?: number;
  estrutCodigo?: number;
  docPercComissaoExtra?: number;
  docComissao?: number;
  sitrenCodigo?: number;
  docPercComissaoTotal?: number;
  docDataDistrenov?: Date;
  docDescComissao?: number;
  rrepCodigo?: number;
  docMesBaseRenovacao?: string;
  docContaDebito?: string;
  docTipoApolice?: string;
  docPremioServicoAdic?: number;
  docApolice2?: string;
  docPrimeiraParcela?: number;
  tpMovCodigo?: number;
  bcoCodigoDebito?: string;
  audInclusaoUsr?: string;
  audInclusaoData?: Date;
  audAlteracaoUsr?: string;
  audAlteracaoData?: Date;
  docTipo6?: string;
  docNumProposta6?: number;
  docComissaoOriginal?: number;
  docCodigoOrigem?: string;
  docIdentificacao?: string;
  docIntervaloVenc?: number;
  docArquivoNumero?: string;
  docSigiloso?: string;
  docPremioLiquidoOriginal?: number;
  docAdicionalFracOriginal?: number;
  docLivroNumeroSusep?: number;
  docLivroPaginaSusep?: number;
  docLivroRegistroSusep?: number;
  ciaCodigoOriginal?: number;
  ptoCodigoOriginal?: number;
  ramoCodigoOriginal?: number;
  vendCodigosOriginal?: string;
  ccoCodigosOriginal?: string;
  docoriCodigo?: number;
  cnCodigo?: number;
  CliDivCodigo?: number;
  docDataRecusa?: Date;
  tpmovCodigoRecusa?: number;
  docCedenteBoleto?: number;
  docCodigoNegociacao?: string;
  docDiaVencimento?: number;
  docComissOutrosServicos?: string;
  docNumPropRenovada?: number;
  docGeracaoAutomatica?: string;
  numPedido?: number;
  numSequencia?: number;
}

interface Apolice extends IApolice { }

interface ApoliceConstructor {
  new(): Apolice;
}

declare const Apolice: ApoliceConstructor;
