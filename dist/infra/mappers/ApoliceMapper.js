"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const Apolice_1 = require("../../domain/entities/Apolice");
const EmDoctos_1 = require("../../infra/models/EmDoctos");
let ApoliceMapper = class ApoliceMapper {
    toClass(objeto) {
        const novaEntidade = new Apolice_1.Apolice();
        for (const chave of Object.keys(objeto)) {
            novaEntidade[chave] = objeto[chave];
        }
        return novaEntidade;
    }
    toEntity(registro) {
        const novoEmDoctos = new Apolice_1.Apolice();
        for (const chave in registro) {
            if (!registro.hasOwnProperty(chave) || novoEmDoctos.hasOwnProperty(chave)) {
                continue;
            }
            if (['docPropApolice', 'docTipoMovto'].indexOf(chave) < 0) {
                novoEmDoctos[chave] = registro[chave];
            }
            if (registro[chave] === 'S' && ['docFormaPagamento'].indexOf(chave) < 0) {
                novoEmDoctos[chave] = true;
            }
            else if (registro[chave] === 'N' && ['docFormaPagamento'].indexOf(chave) < 0) {
                novoEmDoctos[chave] = false;
            }
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
        novoEmDoctos['docTipoMovto'] = 'AP';
        novoEmDoctos['docPropApolice'] = novoEmDoctos['docPropApolice'] ? novoEmDoctos['docNumProposta'] : 0;
        novoEmDoctos['docComissAdic'] = novoEmDoctos['docComissAdic'] ? 'S' : 'N';
        novoEmDoctos['docPrimeiraAVista'] = novoEmDoctos['docPrimeiraAVista'] ? 'S' : 'N';
        novoEmDoctos['docRenovacaoInterna'] = novoEmDoctos['docRenovacaoInterna'] ? 'S' : 'N';
        novoEmDoctos['docSigiloso'] = novoEmDoctos['docSigiloso'] ? 'S' : 'N';
        novoEmDoctos['docComissOutrosServicos'] = novoEmDoctos['docComissOutrosServicos'] ? 'S' : 'N';
        novoEmDoctos['docGeracaoAutomatica'] = novoEmDoctos['docGeracaoAutomatica'] ? 'S' : 'N';
        return novoEmDoctos;
    }
};
ApoliceMapper = tslib_1.__decorate([
    typedi_1.Service('apolice.mapper')
], ApoliceMapper);
exports.ApoliceMapper = ApoliceMapper;
//# sourceMappingURL=ApoliceMapper.js.map