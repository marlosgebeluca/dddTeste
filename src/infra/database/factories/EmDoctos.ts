import * as Faker from 'faker';
import { Factory } from '../../../cross-infra/lib/seeds';
import { EmDoctos } from '../../../infra/models/EmDoctos';
// import { Apolice } from '../../../infra/models/emDoctos/Apolice';
// import { Endosso } from '../../../infra/models/emDoctos/Endosso';

const factory = Factory.getInstance();

factory.define(EmDoctos, (faker: typeof Faker) => {
  const emDoctos = new EmDoctos();

  emDoctos.docTipoMovto = faker.helpers.randomize(['AP', 'CO', 'RE', 'SM', 'CA', 'FT']);

  // if (emDoctos.docTipoMovto !== 'AP') {
  //   emDoctos.endosso = new Endosso();
  // } else {
  //   emDoctos.apolice = new Apolice();
  // }

  emDoctos.docPropApolice = 1;
  emDoctos.cliCodigo = 1;
  emDoctos.ciaCodigo = 1;
  emDoctos.ramoCodigo = 1;
  emDoctos.ptoCodigo = 1;

  return emDoctos;
});
