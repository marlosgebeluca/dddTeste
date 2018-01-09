import { Container } from 'typedi';
import { makeExecutableSchema } from 'graphql-tools';
import { PubSub } from 'graphql-subscriptions';
import { DateTime } from './types/DateTime';
import { ApoliceService } from '../../domain/services/ApoliceService';
import { EndossoService } from '../../domain/services/EndossoService';

export function ApoliceSchema(): any {
  const apoliceService: ApoliceService = Container.get(ApoliceService);
  const endossoService: EndossoService = Container.get(EndossoService);

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
      endosso(docNumProposta: ID!): Endosso
      endossos: [Endosso]
    }

    type Subscription {
      novoApolice: Apolice
      apoliceAlterado: Apolice
      novoEndosso: Endosso
      endossoAlterado: Endosso
    }

    type Mutation {
      criarApolice(input: ApoliceObj): Apolice
      editarApolice(docNumProposta: ID, input: ApoliceObj): Apolice
      excluirApolice(docNumProposta: Int): Boolean
      criarEndosso(input: EndossoObj): Endosso
      editarEndosso(docNumProposta: ID, input: EndossoObj): Endosso
      excluirEndosso(docNumProposta: Int): Boolean
    }

    input ApoliceObj {
      apolice: ApoliceInput
      endosso: EndossoInput
    }

    input EndossoObj {
      endosso: EndossoInput
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
      docNumProposta: ID
      docTipoMovto: String
      docPropApolice: Int
      numeroEndosso: String
      docEndosso2: String
      flgProbEndosso: String
      ciaCodigo: Int
      ramoCodigo: Int
      ptoCodigo: Int
      docEndosso: String
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
      docTipoEndosso: String
      docPremioServicoAdic: Int
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
      ciaCodigo: Int
      ramoCodigo: Int
      ptoCodigo: Int
      docEndosso: String
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
      docTipoEndosso: String
      docPremioServicoAdic: Int
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
      novoEndosso: {
        subscribe: () => pubSub.asyncIterator('novoEndosso'),
      },
      endossoAlterado: {
        subscribe: () => pubSub.asyncIterator('endossoAlterado'),
      },
    },
    Query: {
      apolices: async (obj, args, ctx, info) => {
        return await apoliceService.find([]);
      },
      apolice: async (obj, args, ctx, info) => {
        const apolice = await apoliceService.findOne(args.docNumProposta);

        // verificar se está requisitando endosso
        const buscaEndosso = info.fieldNodes[0].selectionSet.selections.filter(sel => {
          return sel.name.value === 'endossos';
        });

        if (buscaEndosso.length && apolice) {
          apolice.endossos = await endossoService.find({ docPropApolice: args.docNumProposta });
        }

        return apolice;
      },
      endossos: async (obj, args, ctx, info) => {
        return await endossoService.find([]);
      },
      endosso: async (obj, args, ctx, info) => {
        return await endossoService.findOne(args.docNumProposta);
      },
    },
    Mutation: {
      criarApolice: async (obj, { input }, ctx) => {
        const novoApolice = await apoliceService.create(input.apolice);
        pubSub.publish('novoApolice', { novoApolice });
        return novoApolice;
      },
      editarApolice: async (obj, { docNumProposta, input }, ctx) => {
        const apoliceAlterado = await apoliceService.update(+docNumProposta, input.apolice);
        pubSub.publish('apoliceAlterado', { apoliceAlterado });
        return apoliceAlterado;
      },
      excluirApolice: async (obj, { docNumProposta }, ctx) => {
        return await apoliceService.delete(docNumProposta);
      },

      criarEndosso: async (obj, { input }, ctx) => {
        const novoEndosso = await endossoService.create(input.endosso);
        pubSub.publish('novoEndosso', { novoEndosso });
        return novoEndosso;
      },
      editarEndosso: async (obj, { docNumProposta, input }, ctx) => {
        const endossoAlterado = await endossoService.update(+docNumProposta, input.endosso);
        pubSub.publish('endossoAlterado', { endossoAlterado });
        return endossoAlterado;
      },
      excluirEndosso: async (obj, { docNumProposta }, ctx) => {
        return await endossoService.delete(docNumProposta);
      },
    },
  };

  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
}
