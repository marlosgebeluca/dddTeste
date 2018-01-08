"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seeds_1 = require("../../../cross-infra/lib/seeds");
const CadClientes_1 = require("../../../infra/models/cadClientes/CadClientes");
const Gerador_1 = require("./auxiliar/Gerador");
const factory = seeds_1.Factory.getInstance();
factory.define(CadClientes_1.CadClientes, (faker) => {
    const cadClientes = new CadClientes_1.CadClientes();
    faker.locale = 'pt_BR';
    cadClientes.cliTipoPessoa = faker.helpers.randomize(['F', 'J']);
    if (cadClientes.cliTipoPessoa === 'F') {
        cadClientes.cliNome = faker.name.firstName() + ' ' + faker.name.lastName();
        cadClientes.cliCpfCnpj = Gerador_1.Gerador.cpf();
    }
    else {
        cadClientes.cliNome = faker.company.companyName();
        cadClientes.cliCpfCnpj = Gerador_1.Gerador.cnpj();
    }
    cadClientes.cliDataNascimento = faker.date.past(18);
    return cadClientes;
});
//# sourceMappingURL=CadClientesFactoryx.js.map