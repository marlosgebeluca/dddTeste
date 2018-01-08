"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seeds_1 = require("../../../cross-infra/lib/seeds");
const CadTelefones_1 = require("../../../infra/models/cadTelefones/CadTelefones");
const TiposFone_1 = require("../../../domain/enums/cadTelefones/TiposFone");
const factory = seeds_1.Factory.getInstance();
factory.define(CadTelefones_1.CadTelefones, (faker) => {
    const cadTelefones = new CadTelefones_1.CadTelefones();
    cadTelefones.foneTabelaMaster = faker.helpers.randomize(['CADCLIENTES', 'CNNEGOCIOS']);
    if (cadTelefones.foneTabelaMaster === 'CADCLIENTES') {
        cadTelefones.foneCodigoMaster = faker.random.number({ min: 81, max: 90 });
    }
    else {
        cadTelefones.foneTabelaMaster = 'CADCLIENTES';
        cadTelefones.foneCodigoMaster = faker.random.number({ min: 81, max: 90 });
    }
    cadTelefones.tpFoneCodigo = faker.helpers.randomize(TiposFone_1.TiposFone.foneCodigo());
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
//# sourceMappingURL=CadTelefonesFactoryx.js.map