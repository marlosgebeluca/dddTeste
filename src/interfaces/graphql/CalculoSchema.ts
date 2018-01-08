import { Container } from 'typedi';
import { makeExecutableSchema } from 'graphql-tools';
import { PubSub } from 'graphql-subscriptions';
import { CalculoService } from '../../domain/services/calculo/CalculoService';
import { DateTime } from './types/DateTime';

export function CalculoSchema(): any {
  const service: CalculoService = Container.get(CalculoService);

  const typeDefs = `
    scalar DateTime

    schema {
      query: Query
      mutation: Mutation
      subscription: Subscription
    }

    type Query {
      calculo(calcNumero: ID!): Calculo
      calculos: [Calculo]
    }

    type Subscription {
      novoCalculo: Calculo
      calculoAlterado: Calculo
    }

    type Mutation {
      criarCalculo(input: CalculoObj): Calculo
      editarCalculo(calcNumero: ID, input: CalculoObj): Calculo
      excluirCalculo(calcNumero: Int): Boolean
    }

    input CalculoObj {
      calculo: CalculoInput
    }

    input CalculoInput {
      tipo: String!
      vigencia: DateTime
      condutorIndeterminado: Boolean
      renovacao: RenovacaoInput
      segurado: SeguradoInput
      proprietario: ProprietarioInput
      veiculo: VeiculoInput
      condutores: [CondutorInput]
      seguradoras: [CalculoSeguradoraInput]
    }

    type Calculo {
      calcNumero: ID
      tipo: String!
      vigencia: DateTime
      condutorIndeterminado: Boolean
      renovacao: Renovacao
      segurado: Segurado
      proprietario: Proprietario
      veiculo: Veiculo
      condutores: [Condutor]
      seguradoras: [CalculoSeguradora]
    }

    input RenovacaoInput {
      seguradoraAnterior: Int
      vigenciaAnterior: DateTime
      apoliceAnterior: String
    }

    type Renovacao {
      seguradoraAnterior: Int
      vigenciaAnterior: DateTime
      apoliceAnterior: String
    }

    input SeguradoInput {
      tipoPessoa: String
      cpfCnpj: String
      nome: String
      sexo: String
      email: String
      telefone: String
    }

    type Segurado {
      tipoPessoa: String
      cpfCnpj: String
      nome: String
      sexo: String
      email: String
      telefone: String
    }

    input ProprietarioInput {
      tipoPessoa: String
      cpfCnpj: String
      nome: String
      sexo: String
      nascimento: DateTime
      vinculoSegurado: Int
    }

    type Proprietario {
      tipoPessoa: String
      cpfCnpj: String
      nome: String
      sexo: String
      nascimento: DateTime
      vinculoSegurado: Int
    }

    input VeiculoInput {
      fipe: String
      anoModelo: Int
      placa: String
      chassi: String
      combustivel: Int
      zeroKm: Boolean
      lotacao: Int
    }

    type Veiculo {
      fipe: String
      anoModelo: Int
      placa: String
      chassi: String
      combustivel: Int
      zeroKm: Boolean
      lotacao: Int
    }

    input CondutorInput {
      condutorPrincipal: Boolean
      nome: String
      sexo: String
      cpfCnpj: String
      nascimento: DateTime
      relacaoSegurado: Int
    }

    type Condutor {
      condutorPrincipal: Boolean
      nome: String
      sexo: String
      cpfCnpj: String
      nascimento: DateTime
      relacaoSegurado: Int
    }

    input CalculoSeguradoraInput {
      seguradora: Int
      calcula: Boolean
      assistencia: Int
      carroReserva: Int
      vidros: Int
      percComissao: Float
    }

    type CalculoSeguradora {
      seguradora: Int
      calcula: Boolean
      assistencia: Int
      carroReserva: Int
      vidros: Int
      percComissao: Float
    }
  `;

  const pubSub = new PubSub();

  const resolvers = {
    DateTime: { DateTime },
    Subscription: {
      novoCalculo: {
        subscribe: () => pubSub.asyncIterator('novoCalculo'),
      },
      calculoAlterado: {
        subscribe: () => pubSub.asyncIterator('calculoAlterado'),
      },
    },
    Query: {
      calculos: async (obj, args, ctx) => {
        return await service.find();
      },
      calculo: async (obj, args, ctx) => {
        return await service.findOne(args.calcNumero);
      },
    },
    Mutation: {
      criarCalculo: async (obj, { input }, ctx) => {
        const novoCalculo = await service.create(input.calculo);
        pubSub.publish('novoCalculo', { novoCalculo });
        return novoCalculo;
      },
      editarCalculo: async (obj, { calcNumero, input }, ctx) => {
        const calculoAlterado = await service.update(+calcNumero, input.calculo);
        pubSub.publish('calculoAlterado', { calculoAlterado });
        return calculoAlterado;
      },
      excluirCalculo: async (obj, { calcNumero }, ctx) => {
        return await service.delete(calcNumero);
      },
    },
  };

  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
}
