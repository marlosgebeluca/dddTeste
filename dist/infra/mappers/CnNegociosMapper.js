"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CnNegocios_1 = require("../models/cnNegocios/CnNegocios");
const NegocioDTO = require("../../domain/entities/cnNegocios/Negocio");
exports.CnNegociosMapper = {
    toEntity(registro) {
        const novoNegocio = new NegocioDTO.Negocio();
        for (const chave in registro) {
            if (!registro.hasOwnProperty(chave)) {
                continue;
            }
            novoNegocio[chave] = registro[chave];
        }
        return novoNegocio;
    },
    toDatabase(entidade) {
        const novoNegocio = new CnNegocios_1.CnNegocios();
        for (const chave in entidade) {
            if (!entidade.hasOwnProperty(chave)) {
                continue;
            }
            novoNegocio[chave] = entidade[chave];
        }
        return novoNegocio;
    },
};
//# sourceMappingURL=CnNegociosMapper.js.map