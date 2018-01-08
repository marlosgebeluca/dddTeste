
interface IEmDoctos {
  docNumProposta: number;
  endossos: string[];
  docPropApolice: number;
  docTipoMovto: string;
  cliCodigo: number;
  ciaCodigo: number;
  ramoCodigo: number;
  ptoCodigo: number;
  docApolice: string;
  docEndosso: string;
  docDataProposta: Date;
  docDataEmissao: Date;
  docDataEntrada: Date;
  docInicioVigencia: Date;
  docFinalVigencia: Date;
  docQtdParcelas: number;
  docSituacao: string;
  docRenovNumero: string;
  ciaCodigoRenov: number;
  docAnotacoes: string;
  docComissAdic: string;
  docPropUltMov: number;
  docTipoComiss: string;
  docAgenciaDebito: string;
  docPrimeiraAVista: string;
  cliCodigoEstipulante: number;
  docFormaPagamento: string;
  cliCodigoSubestipulante: number;
  docRenovacaoInterna: string;
  docControle: string;
  docBonusIndicacao: number;
  ciaRegCodigo: number;
  moedaCodigo: number;
  cotacData: Date;
  docAdicionalFrac: number;
  docCusto: number;
  cliCodigoIndicacao: number;
  docIof: number;
  docPremioTotal: number;
  docDataEnvioProposta: Date;
  docPercComissao: number;
  estrutCodigo: number;
  docPercComissaoExtra: number;
  docComissao: number;
  sitrenCodigo: number;
  docPercComissaoTotal: number;
  docDataDistrenov: Date;
  docDescComissao: number;
  rrepCodigo: number;
  docMesBaseRenovacao: string;
  docContaDebito: string;
  docTipoApolice: string;
  docPremioServicoAdic: number;
  docEndosso2: string;
  docApolice2: string;
  docPrimeiraParcela: number;
  tpMovCodigo: number;
  bcoCodigoDebito: string;
  audInclusaoUsr: string;
  audInclusaoData: Date;
  audAlteracaoUsr: string;
  audAlteracaoData: Date;
  docTipo6: string;
  docNumProposta6: number;
  docComissaoOriginal: number;
  flgProbEndosso: string;
  docCodigoOrigem: string;
  docIdentificacao: string;
  docIntervaloVenc: number;
  docArquivoNumero: string;
  docSigiloso: string;
  docPremioLiquidoOriginal: number;
  docAdicionalFracOriginal: number;
  docLivroNumeroSusep: number;
  docLivroPaginaSusep: number;
  docLivroRegistroSusep: number;
  ciaCodigoOriginal: number;
  ptoCodigoOriginal: number;
  ramoCodigoOriginal: number;
  vendCodigosOriginal: string;
  ccoCodigosOriginal: string;
  docoriCodigo: number;
  cnCodigo: number;
  CliDivCodigo: number;
  docDataRecusa: Date;
  tpmovCodigoRecusa: number;
  docCedenteBoleto: number;
  docCodigoNegociacao: string;
  docDiaVencimento: number;
  docComissOutrosServicos: string;
  docNumPropRenovada: number;
  docGeracaoAutomatica: string;
  numPedido: number;
  numSequencia: number;
}

interface EmDoctos extends IEmDoctos { }

interface EmDoctosConstructor {
  new(): EmDoctos;
}

declare const EmDoctos: EmDoctosConstructor;
