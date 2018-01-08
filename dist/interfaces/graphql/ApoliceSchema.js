"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const graphql_tools_1 = require("graphql-tools");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const DateTime_1 = require("./types/DateTime");
const ApoliceService_1 = require("../../domain/services/ApoliceService");
function ApoliceSchema() {
    const service = typedi_1.Container.get(ApoliceService_1.ApoliceService);
    const typeDefs = `
    scalar DateTime

    schema {
      query: Query
      mutation: Mutation
      subscription: Subscription
    }

    type Query {
      apolice(docNumProposta: ID!): Apolice
      apolices: [Apolice]
    }

    type Subscription {
      novoApolice: Apolice
      apoliceAlterado: Apolice
    }

    type Mutation {
      criarApolice(input: ApoliceObj): Apolice
      editarApolice(docNumProposta: ID, input: ApoliceObj): Apolice
      excluirApolice(docNumProposta: Int): Boolean
    }

    input ApoliceObj {
      apolice: ApoliceInput
    }

    input ApoliceInput {
      docNumProposta: ID
      endossos: EndossoInput
      cliCodigo: Int
      ciaCodigo: Int
      ramoCodigo: Int
      ptoCodigo: Int
      docApolice: String
      docDataProposta: DateTime
      docDataEmissao: DateTime
      docDataEntrada: DateTime
      docInicioVigencia: DateTime
      docFinalVigencia: DateTime
      docQtdParcelas: Int
      docSituacao: String
      docRenovNumero: String
      ciaCodigoRenov: Int
      docAnotacoes: String
      docComissAdic: Boolean
      docPropUltMov: Int
      docTipoComiss: String
      docAgenciaDebito: String
      docPrimeiraAVista: String
      cliCodigoEstipulante: Int
      docFormaPagamento: String
      cliCodigoSubestipulante: Int
      docRenovacaoInterna: String
      docControle: String
      docBonusIndicacao: Int
      ciaRegCodigo: Int
      moedaCodigo: Int
      cotacData: DateTime
      docAdicionalFrac: Int
      docCusto: Int
      cliCodigoIndicacao: Int
      docIof: Int
      docPremioTotal: Int
      docDataEnvioProposta: DateTime
      docPercComissao: Int
      estrutCodigo: Int
      docPercComissaoExtra: Int
      docComissao: Int
      sitrenCodigo: Int
      docPercComissaoTotal: Int
      docDataDistrenov: DateTime
      docDescComissao: Int
      rrepCodigo: Int
      docMesBaseRenovacao: String
      docContaDebito: String
      docTipoApolice: String
      docPremioServicoAdic: Int
      docApolice2: String
      docPrimeiraParcela: Int
      tpMovCodigo: Int
      bcoCodigoDebito: String
      audInclusaoUsr: String
      audInclusaoData: DateTime
      audAlteracaoUsr: String
      audAlteracaoData: DateTime
      docTipo6: String
      docNumProposta6: Int
      docComissaoOriginal: Int
      docCodigoOrigem: String
      docIdentificacao: String
      docIntervaloVenc: Int
      docArquivoNumero: String
      docSigiloso: String
      docPremioLiquidoOriginal: Int
      docAdicionalFracOriginal: Int
      docLivroNumeroSusep: Int
      docLivroPaginaSusep: Int
      docLivroRegistroSusep: Int
      ciaCodigoOriginal: Int
      ptoCodigoOriginal: Int
      ramoCodigoOriginal: Int
      vendCodigosOriginal: String
      ccoCodigosOriginal: String
      docoriCodigo: Int
      cnCodigo: Int
      CliDivCodigo: Int
      docDataRecusa: DateTime
      tpmovCodigoRecusa: Int
      docCedenteBoleto: Int
      docCodigoNegociacao: String
      docDiaVencimento: Int
      docComissOutrosServicos: String
      docNumPropRenovada: Int
      docGeracaoAutomatica: String
      numPedido: Int
      numSequencia: Int
    }

    type Apolice {
      docNumProposta: ID
      endossos: Endosso
      cliCodigo: Int
      ciaCodigo: Int
      ramoCodigo: Int
      ptoCodigo: Int
      docApolice: String
      docDataProposta: DateTime
      docDataEmissao: DateTime
      docDataEntrada: DateTime
      docInicioVigencia: DateTime
      docFinalVigencia: DateTime
      docQtdParcelas: Int
      docSituacao: String
      docRenovNumero: String
      ciaCodigoRenov: Int
      docAnotacoes: String
      docComissAdic: Boolean
      docPropUltMov: Int
      docTipoComiss: String
      docAgenciaDebito: String
      docPrimeiraAVista: String
      cliCodigoEstipulante: Int
      docFormaPagamento: String
      cliCodigoSubestipulante: Int
      docRenovacaoInterna: String
      docControle: String
      docBonusIndicacao: Int
      ciaRegCodigo: Int
      moedaCodigo: Int
      cotacData: DateTime
      docAdicionalFrac: Int
      docCusto: Int
      cliCodigoIndicacao: Int
      docIof: Int
      docPremioTotal: Int
      docDataEnvioProposta: DateTime
      docPercComissao: Int
      estrutCodigo: Int
      docPercComissaoExtra: Int
      docComissao: Int
      sitrenCodigo: Int
      docPercComissaoTotal: Int
      docDataDistrenov: DateTime
      docDescComissao: Int
      rrepCodigo: Int
      docMesBaseRenovacao: String
      docContaDebito: String
      docTipoApolice: String
      docPremioServicoAdic: Int
      docApolice2: String
      docPrimeiraParcela: Int
      tpMovCodigo: Int
      bcoCodigoDebito: String
      audInclusaoUsr: String
      audInclusaoData: DateTime
      audAlteracaoUsr: String
      audAlteracaoData: DateTime
      docTipo6: String
      docNumProposta6: Int
      docComissaoOriginal: Int
      docCodigoOrigem: String
      docIdentificacao: String
      docIntervaloVenc: Int
      docArquivoNumero: String
      docSigiloso: String
      docPremioLiquidoOriginal: Int
      docAdicionalFracOriginal: Int
      docLivroNumeroSusep: Int
      docLivroPaginaSusep: Int
      docLivroRegistroSusep: Int
      ciaCodigoOriginal: Int
      ptoCodigoOriginal: Int
      ramoCodigoOriginal: Int
      vendCodigosOriginal: String
      ccoCodigosOriginal: String
      docoriCodigo: Int
      cnCodigo: Int
      CliDivCodigo: Int
      docDataRecusa: DateTime
      tpmovCodigoRecusa: Int
      docCedenteBoleto: Int
      docCodigoNegociacao: String
      docDiaVencimento: Int
      docComissOutrosServicos: String
      docNumPropRenovada: Int
      docGeracaoAutomatica: String
      numPedido: Int
      numSequencia: Int
    }

    input EndossoObj {
      endosso: EndossoInput
    }

    input EndossoInput {
      docNumProposta: ID
      docNumProposta: Int
      docTipoMovto: String
      docPropApolice: Int
      numeroEndosso: String
      docEndosso2: String
      flgProbEndosso: String
      cliCodigo: Int
      ciaCodigo: Int
      ramoCodigo: Int
      ptoCodigo: Int
      docApolice: String
      docDataProposta: DateTime
      docDataEmissao: DateTime
      docDataEntrada: DateTime
      docInicioVigencia: DateTime
      docFinalVigencia: DateTime
      docQtdParcelas: Int
      docSituacao: String
      docRenovNumero: String
      ciaCodigoRenov: Int
      docAnotacoes: String
      docComissAdic: Boolean
      docPropUltMov: Int
      docTipoComiss: String
      docAgenciaDebito: String
      docPrimeiraAVista: String
      cliCodigoEstipulante: Int
      docFormaPagamento: String
      cliCodigoSubestipulante: Int
      docRenovacaoInterna: String
      docControle: String
      docBonusIndicacao: Int
      ciaRegCodigo: Int
      moedaCodigo: Int
      cotacData: DateTime
      docAdicionalFrac: Int
      docCusto: Int
      cliCodigoIndicacao: Int
      docIof: Int
      docPremioTotal: Int
      docDataEnvioProposta: DateTime
      docPercComissao: Int
      estrutCodigo: Int
      docPercComissaoExtra: Int
      docComissao: Int
      sitrenCodigo: Int
      docPercComissaoTotal: Int
      docDataDistrenov: DateTime
      docDescComissao: Int
      rrepCodigo: Int
      docMesBaseRenovacao: String
      docContaDebito: String
      docTipoApolice: String
      docPremioServicoAdic: Int
      docApolice2: String
      docPrimeiraParcela: Int
      tpMovCodigo: Int
      bcoCodigoDebito: String
      audInclusaoUsr: String
      audInclusaoData: DateTime
      audAlteracaoUsr: String
      audAlteracaoData: DateTime
      docTipo6: String
      docNumProposta6: Int
      docComissaoOriginal: Int
      docCodigoOrigem: String
      docIdentificacao: String
      docIntervaloVenc: Int
      docArquivoNumero: String
      docSigiloso: String
      docPremioLiquidoOriginal: Int
      docAdicionalFracOriginal: Int
      docLivroNumeroSusep: Int
      docLivroPaginaSusep: Int
      docLivroRegistroSusep: Int
      ciaCodigoOriginal: Int
      ptoCodigoOriginal: Int
      ramoCodigoOriginal: Int
      vendCodigosOriginal: String
      ccoCodigosOriginal: String
      docoriCodigo: Int
      cnCodigo: Int
      CliDivCodigo: Int
      docDataRecusa: DateTime
      tpmovCodigoRecusa: Int
      docCedenteBoleto: Int
      docCodigoNegociacao: String
      docDiaVencimento: Int
      docComissOutrosServicos: String
      docNumPropRenovada: Int
      docGeracaoAutomatica: String
      numPedido: Int
      numSequencia: Int
    }

    type Endosso {
      docNumProposta: ID
      docTipoMovto: String
      docPropApolice: Int
      numeroEndosso: String
      docEndosso2: String
      flgProbEndosso: String
      cliCodigo: Int
      ciaCodigo: Int
      ramoCodigo: Int
      ptoCodigo: Int
      docApolice: String
      docDataProposta: DateTime
      docDataEmissao: DateTime
      docDataEntrada: DateTime
      docInicioVigencia: DateTime
      docFinalVigencia: DateTime
      docQtdParcelas: Int
      docSituacao: String
      docRenovNumero: String
      ciaCodigoRenov: Int
      docAnotacoes: String
      docComissAdic: Boolean
      docPropUltMov: Int
      docTipoComiss: String
      docAgenciaDebito: String
      docPrimeiraAVista: String
      cliCodigoEstipulante: Int
      docFormaPagamento: String
      cliCodigoSubestipulante: Int
      docRenovacaoInterna: String
      docControle: String
      docBonusIndicacao: Int
      ciaRegCodigo: Int
      moedaCodigo: Int
      cotacData: DateTime
      docAdicionalFrac: Int
      docCusto: Int
      cliCodigoIndicacao: Int
      docIof: Int
      docPremioTotal: Int
      docDataEnvioProposta: DateTime
      docPercComissao: Int
      estrutCodigo: Int
      docPercComissaoExtra: Int
      docComissao: Int
      sitrenCodigo: Int
      docPercComissaoTotal: Int
      docDataDistrenov: DateTime
      docDescComissao: Int
      rrepCodigo: Int
      docMesBaseRenovacao: String
      docContaDebito: String
      docTipoApolice: String
      docPremioServicoAdic: Int
      docApolice2: String
      docPrimeiraParcela: Int
      tpMovCodigo: Int
      bcoCodigoDebito: String
      audInclusaoUsr: String
      audInclusaoData: DateTime
      audAlteracaoUsr: String
      audAlteracaoData: DateTime
      docTipo6: String
      docNumProposta6: Int
      docComissaoOriginal: Int
      docCodigoOrigem: String
      docIdentificacao: String
      docIntervaloVenc: Int
      docArquivoNumero: String
      docSigiloso: String
      docPremioLiquidoOriginal: Int
      docAdicionalFracOriginal: Int
      docLivroNumeroSusep: Int
      docLivroPaginaSusep: Int
      docLivroRegistroSusep: Int
      ciaCodigoOriginal: Int
      ptoCodigoOriginal: Int
      ramoCodigoOriginal: Int
      vendCodigosOriginal: String
      ccoCodigosOriginal: String
      docoriCodigo: Int
      cnCodigo: Int
      CliDivCodigo: Int
      docDataRecusa: DateTime
      tpmovCodigoRecusa: Int
      docCedenteBoleto: Int
      docCodigoNegociacao: String
      docDiaVencimento: Int
      docComissOutrosServicos: String
      docNumPropRenovada: Int
      docGeracaoAutomatica: String
      numPedido: Int
      numSequencia: Int
    }

  `;
    const pubSub = new graphql_subscriptions_1.PubSub();
    const resolvers = {
        DateTime: { DateTime: DateTime_1.DateTime },
        Subscription: {
            novoApolice: {
                subscribe: () => pubSub.asyncIterator('novoApolice'),
            },
            apoliceAlterado: {
                subscribe: () => pubSub.asyncIterator('apoliceAlterado'),
            },
        },
        Query: {
            apolices: (obj, args, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield service.find([]);
            }),
            apolice: (obj, args, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield service.findOne(args.docNumProposta);
            }),
        },
        Mutation: {
            criarApolice: (obj, { input }, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const novoApolice = yield service.create(input.apolice);
                pubSub.publish('novoApolice', { novoApolice });
                return novoApolice;
            }),
            editarApolice: (obj, { docNumProposta, input }, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const apoliceAlterado = yield service.update(+docNumProposta, input.apolice);
                pubSub.publish('apoliceAlterado', { apoliceAlterado });
                return apoliceAlterado;
            }),
            excluirApolice: (obj, { docNumProposta }, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield service.delete(docNumProposta);
            }),
        },
    };
    return graphql_tools_1.makeExecutableSchema({
        typeDefs,
        resolvers,
    });
}
exports.ApoliceSchema = ApoliceSchema;
//# sourceMappingURL=ApoliceSchema.js.map