import * as Faker from 'faker';
import { Factory } from '../../../cross-infra/lib/seeds';
import { CadClientes } from '../../../infra/models/cadClientes/CadClientes';
import { Gerador } from './auxiliar/Gerador';

const factory = Factory.getInstance();

factory.define(CadClientes, (faker: typeof Faker) => {
  const cadClientes = new CadClientes();
  faker.locale = 'pt_BR';

  cadClientes.cliTipoPessoa = faker.helpers.randomize(['F', 'J']);

  if (cadClientes.cliTipoPessoa === 'F') {
    cadClientes.cliNome = faker.name.firstName() + ' ' + faker.name.lastName();
    cadClientes.cliCpfCnpj = Gerador.cpf();
  } else {
    cadClientes.cliNome = faker.company.companyName();
    cadClientes.cliCpfCnpj = Gerador.cnpj();
  }

  cadClientes.cliDataNascimento = faker.date.past(18);

  return cadClientes;
});
