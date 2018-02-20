"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const CustomDecorator_1 = require("../decorators/CustomDecorator");
let GerarJsonService = class GerarJsonService {
    gerar(classe, relacao) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const retorno = [];
            for (const key of Object.keys(classe)) {
                const prop = {
                    label: CustomDecorator_1.getLabel(classe, key),
                    tipoCampo: CustomDecorator_1.getTipoCampo(classe, key),
                    personalizado: CustomDecorator_1.getCampoPersonalizado(classe, key),
                    tamanhoX: CustomDecorator_1.getTamanhoX(classe, key),
                    tamanhoY: CustomDecorator_1.getTamanhoY(classe, key),
                    hide: CustomDecorator_1.getHide(classe, key),
                    apareceRelacao: CustomDecorator_1.getApareceRelacao(classe, key),
                };
                if (prop.label !== undefined
                    || prop.tipoCampo !== undefined
                    || prop.personalizado !== undefined
                    || prop.tamanhoX !== undefined
                    || prop.tamanhoY !== undefined
                    || prop.hide !== undefined
                    || prop.apareceRelacao !== undefined) {
                    const ret = {
                        chave: key,
                        valor: classe[key],
                        propriedades: prop,
                    };
                    if (relacao) {
                        if (prop.apareceRelacao) {
                            retorno.push(ret);
                        }
                    }
                    else {
                        retorno.push(ret);
                    }
                }
            }
            return retorno;
        });
    }
};
GerarJsonService = tslib_1.__decorate([
    typedi_1.Service('gerarJson.service')
], GerarJsonService);
exports.GerarJsonService = GerarJsonService;
//# sourceMappingURL=GerarJsonService.js.map