import * as Faker from 'faker';
import { Factory } from '../../../cross-infra/lib/seeds';
import { CadTelefones } from '../../../infra/models/cadTelefones/CadTelefones';
import { TiposFone } from '../../../domain/enums/cadTelefones/TiposFone';

const factory = Factory.getInstance();

factory.define(CadTelefones, (faker: typeof Faker) => {
  const cadTelefones = new CadTelefones();

  cadTelefones.foneTabelaMaster = faker.helpers.randomize(['CADCLIENTES', 'CNNEGOCIOS']);

  if (cadTelefones.foneTabelaMaster === 'CADCLIENTES') {
    cadTelefones.foneCodigoMaster = faker.random.number({ min: 81, max: 90 });
  } else {
    cadTelefones.foneTabelaMaster = 'CADCLIENTES';
    cadTelefones.foneCodigoMaster = faker.random.number({ min: 81, max: 90 });
  }

  cadTelefones.tpFoneCodigo = faker.helpers.randomize(
    TiposFone.foneCodigo()
  );

  if (cadTelefones.tpFoneCodigo === 1) {
    cadTelefones.foneDDD = faker.phone.phoneNumber('(99)');
    cadTelefones.foneNumero = faker.phone.phoneNumber('99999-9999');
    cadTelefones.foneRecebeSms = faker.helpers.randomize(['N', 'S']);
    cadTelefones.fonePrincipal = 'S';
  }

  if (cadTelefones.tpFoneCodigo === 2) {
    cadTelefones.foneDDD = faker.phone.phoneNumber('(99)');
    cadTelefones.foneNumero = faker.phone.phoneNumber('9999-9999');
    cadTelefones.foneRecebeSms = 'N';
    cadTelefones.fonePrincipal = 'N';
  }

  if (cadTelefones.tpFoneCodigo === 3) {
    cadTelefones.foneDDD = faker.phone.phoneNumber('(99)');
    cadTelefones.foneNumero = faker.phone.phoneNumber('99999-9999');
    cadTelefones.foneRecebeSms = 'N';
    cadTelefones.fonePrincipal = 'N';
  }

  cadTelefones.foneObeservacao = 'Teste observação';

  return cadTelefones;
});
