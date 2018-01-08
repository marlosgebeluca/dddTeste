import { CadTelefones } from '../models/cadTelefones/CadTelefones';
import * as TelefoneDTO from '../../domain/entities/cadTelefones/Telefone';

export const CadTelefonesMapper = {
  toEntity(registro: any): TelefoneDTO.Telefone {
    const novoTelefone = new TelefoneDTO.Telefone();

    for (const chave in registro) {
      if (!registro.hasOwnProperty(chave)) {
        continue;
      }

      novoTelefone[chave] = registro[chave];
    }

    return novoTelefone;
  },

  toDatabase(entidade: any): CadTelefones {
    const novoTelefone = new CadTelefones();

    for (const chave in entidade) {
      if (!entidade.hasOwnProperty(chave)) {
        continue;
      }

      novoTelefone[chave] = entidade[chave];
    }

    return novoTelefone;
  },
};
