import { CadClientes } from '../models/cadClientes/CadClientes';
import * as ClienteDTO from '../../domain/entities/cadClientes/Cliente';

export const CadClientesMapper = {
  toEntity(registro: any): ClienteDTO.Cliente {
    const novCliente = new ClienteDTO.Cliente();

    for (const chave in registro) {
      if (!registro.hasOwnProperty(chave)) {
        continue;
      }

      novCliente[chave] = registro[chave];
    }

    return novCliente;
  },

  toDatabase(entidade: any): CadClientes {
    const novCliente = new CadClientes();

    for (const chave in entidade) {
      if (!entidade.hasOwnProperty(chave)) {
        continue;
      }

      novCliente[chave] = entidade[chave];
    }

    return novCliente;
  },
};
