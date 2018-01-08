"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const Endosso_1 = require("../../domain/entities/Endosso");
const EmDoctos_1 = require("../../infra/models/EmDoctos");
let EndossoMapper = class EndossoMapper {
    toClass(objeto) {
        const novaEntidade = new Endosso_1.Endosso();
        for (const chave of Object.keys(objeto)) {
            novaEntidade[chave] = objeto[chave];
        }
        return novaEntidade;
    }
    toEntity(registro) {
        let novoEmDoctos;
        novoEmDoctos = new Endosso_1.Endosso();
        for (const chave in registro) {
            if (!registro.hasOwnProperty(chave)) {
                continue;
            }
            novoEmDoctos[chave] = registro[chave];
        }
        return novoEmDoctos;
    }
    toDatabase(entidade) {
        const novoEmDoctos = new EmDoctos_1.EmDoctos();
        for (const chave in entidade) {
            if (!entidade.hasOwnProperty(chave)) {
                continue;
            }
            novoEmDoctos[chave] = entidade[chave];
        }
        if (+novoEmDoctos['docTipoMovto'] === 1) {
            novoEmDoctos['docTipoMovto'] = 'CO';
        }
        else if (+novoEmDoctos['docTipoMovto'] === 2) {
            novoEmDoctos['docTipoMovto'] = 'RE';
        }
        else if (+novoEmDoctos['docTipoMovto'] === 3) {
            novoEmDoctos['docTipoMovto'] = 'SM';
        }
        else if (+novoEmDoctos['docTipoMovto'] === 4) {
            novoEmDoctos['docTipoMovto'] = 'CA';
        }
        else {
            novoEmDoctos['docTipoMovto'] = 'FT';
        }
        novoEmDoctos['docComissAdic'] = novoEmDoctos['docComissAdic'] ? 'S' : 'N';
        novoEmDoctos['docPrimeiraAVista'] = novoEmDoctos['docPrimeiraAVista'] ? 'S' : 'N';
        novoEmDoctos['docRenovacaoInterna'] = novoEmDoctos['docRenovacaoInterna'] ? 'S' : 'N';
        novoEmDoctos['docSigiloso'] = novoEmDoctos['docSigiloso'] ? 'S' : 'N';
        novoEmDoctos['docComissOutrosServicos'] = novoEmDoctos['docComissOutrosServicos'] ? 'S' : 'N';
        novoEmDoctos['docGeracaoAutomatica'] = novoEmDoctos['docGeracaoAutomatica'] ? 'S' : 'N';
        return novoEmDoctos;
    }
};
EndossoMapper = tslib_1.__decorate([
    typedi_1.Service('endosso.mapper')
], EndossoMapper);
exports.EndossoMapper = EndossoMapper;
//# sourceMappingURL=EndossoMapper.js.map