"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seeds_1 = require("../../../cross-infra/lib/seeds");
const EmDoctos_1 = require("../../../infra/models/EmDoctos");
// import { Apolice } from '../../../infra/models/emDoctos/Apolice';
// import { Endosso } from '../../../infra/models/emDoctos/Endosso';
const factory = seeds_1.Factory.getInstance();
factory.define(EmDoctos_1.EmDoctos, (faker) => {
    const emDoctos = new EmDoctos_1.EmDoctos();
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
//# sourceMappingURL=EmDoctos.js.map