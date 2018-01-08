import { Container } from 'typedi';
import { makeExecutableSchema } from 'graphql-tools';
import { PubSub } from 'graphql-subscriptions';
import { DateTime } from './types/DateTime';
import { ApoliceService } from '../../domain/services/ApoliceService';


export function ApoliceSchema(): any {
  const service: ApoliceService = Container.get(ApoliceService);

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
      endossos: [EndossoInput]
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
      endossos: [Endosso]
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

    input EndossoInput {
      endosso: ID
      tipo_endosso: String
    }

    type Endosso {
      endosso: ID
      tipo_endosso: String
    }

  `;

  const pubSub = new PubSub();

  const resolvers = {
    DateTime: { DateTime },
    Subscription: {
      novoApolice: {
        subscribe: () => pubSub.asyncIterator('novoApolice'),
      },
      apoliceAlterado: {
        subscribe: () => pubSub.asyncIterator('apoliceAlterado'),
      },
    },
    Query: {
      apolices: async (obj, args, ctx) => {
        return await service.find([]);
      },
      apolice: async (obj, args, ctx) => {
        return await service.findOne(args.docNumProposta);
      },
    },
    Mutation: {
      criarApolice: async (obj, { input }, ctx) => {
        const novoApolice = await service.create(input.apolice);
        pubSub.publish('novoApolice', { novoApolice });
        return novoApolice;
      },
      editarApolice: async (obj, { docNumProposta, input }, ctx) => {
        const apoliceAlterado = await service.update(+docNumProposta, input.apolice);
        pubSub.publish('apoliceAlterado', { apoliceAlterado });
        return apoliceAlterado;
      },
      excluirApolice: async (obj, { docNumProposta }, ctx) => {
        return await service.delete(docNumProposta);
      },
    },
  };

  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
}
