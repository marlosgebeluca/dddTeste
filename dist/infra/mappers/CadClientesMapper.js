"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CadClientes_1 = require("../models/cadClientes/CadClientes");
const ClienteDTO = require("../../domain/entities/cadClientes/Cliente");
exports.CadClientesMapper = {
    toEntity(registro) {
        const novCliente = new ClienteDTO.Cliente();
        for (const chave in registro) {
            if (!registro.hasOwnProperty(chave)) {
                continue;
            }
            novCliente[chave] = registro[chave];
        }
        return novCliente;
    },
    toDatabase(entidade) {
        const novCliente = new CadClientes_1.CadClientes();
        for (const chave in entidade) {
            if (!entidade.hasOwnProperty(chave)) {
                continue;
            }
            novCliente[chave] = entidade[chave];
        }
        return novCliente;
    },
};
//# sourceMappingURL=CadClientesMapper.js.map