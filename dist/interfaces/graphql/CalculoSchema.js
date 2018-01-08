"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const graphql_tools_1 = require("graphql-tools");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const CalculoService_1 = require("../../domain/services/calculo/CalculoService");
const DateTime_1 = require("./types/DateTime");
function CalculoSchema() {
    const service = typedi_1.Container.get(CalculoService_1.CalculoService);
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
    const pubSub = new graphql_subscriptions_1.PubSub();
    const resolvers = {
        DateTime: { DateTime: DateTime_1.DateTime },
        Subscription: {
            novoCalculo: {
                subscribe: () => pubSub.asyncIterator('novoCalculo'),
            },
            calculoAlterado: {
                subscribe: () => pubSub.asyncIterator('calculoAlterado'),
            },
        },
        Query: {
            calculos: (obj, args, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield service.find();
            }),
            calculo: (obj, args, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield service.findOne(args.calcNumero);
            }),
        },
        Mutation: {
            criarCalculo: (obj, { input }, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const novoCalculo = yield service.create(input.calculo);
                pubSub.publish('novoCalculo', { novoCalculo });
                return novoCalculo;
            }),
            editarCalculo: (obj, { calcNumero, input }, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const calculoAlterado = yield service.update(+calcNumero, input.calculo);
                pubSub.publish('calculoAlterado', { calculoAlterado });
                return calculoAlterado;
            }),
            excluirCalculo: (obj, { calcNumero }, ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return yield service.delete(calcNumero);
            }),
        },
    };
    return graphql_tools_1.makeExecutableSchema({
        typeDefs,
        resolvers,
    });
}
exports.CalculoSchema = CalculoSchema;
//# sourceMappingURL=CalculoSchema.js.map