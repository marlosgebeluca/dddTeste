"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CadTelefones_1 = require("../models/cadTelefones/CadTelefones");
const TelefoneDTO = require("../../domain/entities/cadTelefones/Telefone");
exports.CadTelefonesMapper = {
    toEntity(registro) {
        const novoTelefone = new TelefoneDTO.Telefone();
        for (const chave in registro) {
            if (!registro.hasOwnProperty(chave)) {
                continue;
            }
            novoTelefone[chave] = registro[chave];
        }
        return novoTelefone;
    },
    toDatabase(entidade) {
        const novoTelefone = new CadTelefones_1.CadTelefones();
        for (const chave in entidade) {
            if (!entidade.hasOwnProperty(chave)) {
                continue;
            }
            novoTelefone[chave] = entidade[chave];
        }
        return novoTelefone;
    },
};
//# sourceMappingURL=CadTelefonesMapper.js.map