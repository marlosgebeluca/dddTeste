"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seeds_1 = require("../../../cross-infra/lib/seeds");
const Calculo_1 = require("../../../infra/models/calculo/Calculo");
const Condutor_1 = require("../../../infra/models/condutor/Condutor");
const CalculoSeguradora_1 = require("../../../infra/models/calculoSeguradora/CalculoSeguradora");
const Seguradoras_1 = require("../../../domain/enums/Seguradoras");
const VinculosSegurado_1 = require("../../../domain/enums/VinculosSegurado");
const Combustiveis_1 = require("../../../domain/enums/Combustiveis");
const factory = seeds_1.Factory.getInstance();
factory.define(Calculo_1.Calculo, (faker) => {
    const calculo = new Calculo_1.Calculo();
    calculo.tipo = faker.random.arrayElement(['N', 'R']);
    calculo.vigencia = new Date();
    // Renovacao
    if (calculo.tipo === 'R') {
        calculo.renovApoliceAnterior = faker.random.alphaNumeric(10);
        calculo.renovSeguradoraAnterior = faker.random.arrayElement(Seguradoras_1.Seguradoras.seguradorasEnum());
        calculo.renovVigenciaAnterior = new Date();
    }
    // Segurado
    calculo.segSexo = faker.random.arrayElement(['M', 'F']);
    calculo.segTipoPessoa = faker.random.arrayElement(['F', 'J']);
    calculo.segEmail = faker.internet.email();
    calculo.segNome = `${faker.name.firstName()} ${faker.name.lastName()}`;
    calculo.segTelefone = faker.phone.phoneNumber('(99) 9999-9999');
    if (calculo.segTipoPessoa === 'F') {
        calculo.segCpfCnpj = gerarCPF();
    }
    else {
        calculo.segCpfCnpj = gerarCNPJ();
        calculo.condutorIndeterminado = faker.random.arrayElement(['S', 'N']);
    }
    // Condutor
    if (calculo.condutorIndeterminado === 'N') {
        const condutor = new Condutor_1.Condutor();
        condutor.calculo = calculo;
        condutor.condutorPrincipal = 'S';
        condutor.relacaoSegurado = faker.random.arrayElement(VinculosSegurado_1.VinculosSegurado.vinculosEnum());
        condutor.cpfCnpj = gerarCPF();
        condutor.sexo = faker.random.arrayElement(['M', 'F']);
        condutor.nascimento = faker.date.past(18);
        condutor.nome = `${faker.name.firstName()} ${faker.name.lastName()}`;
        calculo.condutores = [condutor];
    }
    // Veiculo
    calculo.veicAnoModelo = faker.random.number({ min: 2010, max: 2018 });
    calculo.veicChassi = faker.random.alphaNumeric(17);
    calculo.veicPlaca = 'ABC-1234';
    calculo.veicLotacao = 5;
    calculo.veicFipe = '1231-2';
    calculo.veicZeroKm = 'N';
    calculo.veicMarca = faker.company.companyName();
    calculo.veicModelo = faker.commerce.productName();
    if (calculo.veicAnoModelo > 2017) {
        calculo.veicZeroKm = 'S';
    }
    calculo.veicCombustivel = faker.random.arrayElement(Combustiveis_1.Combustiveis.combustiveisEnum());
    // Seguradora
    const seguradora = new CalculoSeguradora_1.CalculoSeguradora();
    seguradora.calculo = calculo;
    seguradora.calcula = 'S';
    seguradora.percComissao = faker.random.number({ min: 10, max: 30 });
    seguradora.assistencia = 1;
    seguradora.carroReserva = 1;
    seguradora.vidros = 1;
    seguradora.seguradora = faker.random.arrayElement(Seguradoras_1.Seguradoras.seguradorasAtivasEnum());
    calculo.seguradoras = [seguradora];
    return calculo;
});
function gerarCNPJ() {
    const n1 = Math.round(Math.random() * 9);
    const n2 = Math.round(Math.random() * 9);
    const n3 = Math.round(Math.random() * 9);
    const n4 = Math.round(Math.random() * 9);
    const n5 = Math.round(Math.random() * 9);
    const n6 = Math.round(Math.random() * 9);
    const n7 = Math.round(Math.random() * 9);
    const n8 = Math.round(Math.random() * 9);
    const n9 = 0;
    const n10 = 0;
    const n11 = 0;
    const n12 = 1;
    let aux = n1 * 5 + n2 * 4 + n3 * 3 + n4 * 2 + n5 * 9 + n6 * 8 + n7 * 7 + n8 * 6 + n9 * 5 + n10 * 4 + n11 * 3 + n12 * 2;
    aux = mod(aux, 11);
    const nv1 = aux < 2 ? 0 : 11 - aux;
    aux = n1 * 6 + n2 * 5 + n3 * 4 + n4 * 3 + n5 * 2 + n6 * 9 + n7 * 8 + n8 * 7 + n9 * 6 + n10 * 5 + n11 * 4 + n12 * 3 + nv1 * 2;
    aux = mod(aux, 11);
    const nv2 = aux < 2 ? 0 : 11 - aux;
    return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${nv1}${nv2}`;
}
exports.gerarCNPJ = gerarCNPJ;
function gerarCPF() {
    const n1 = Math.round(Math.random() * 9);
    const n2 = Math.round(Math.random() * 9);
    const n3 = Math.round(Math.random() * 9);
    const n4 = Math.round(Math.random() * 9);
    const n5 = Math.round(Math.random() * 9);
    const n6 = Math.round(Math.random() * 9);
    const n7 = Math.round(Math.random() * 9);
    const n8 = Math.round(Math.random() * 9);
    const n9 = Math.round(Math.random() * 9);
    let aux = n1 * 10 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2;
    aux = mod(aux, 11);
    const nv1 = aux < 2 ? 0 : 11 - aux;
    aux = n1 * 11 + n2 * 10 + n3 * 9 + n4 * 8 + n5 * 7 + n6 * 6 + n7 * 5 + n8 * 4 + n9 * 3 + nv1 * 2;
    aux = mod(aux, 11);
    const nv2 = aux < 2 ? 0 : 11 - aux;
    return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${nv1}${nv2}`;
}
exports.gerarCPF = gerarCPF;
function mod(a, b) {
    return Math.round(a - (Math.floor(a / b) * b));
}
//# sourceMappingURL=CalculoFactory.js.map