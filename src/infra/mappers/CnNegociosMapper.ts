import { CnNegocios } from '../models/cnNegocios/CnNegocios';
import * as NegocioDTO from '../../domain/entities/cnNegocios/Negocio';

export const CnNegociosMapper = {
  toEntity(registro: any): NegocioDTO.Negocio {
    const novoNegocio = new NegocioDTO.Negocio();

    for (const chave in registro) {
      if (!registro.hasOwnProperty(chave)) {
        continue;
      }

      novoNegocio[chave] = registro[chave];
    }

    return novoNegocio;
  },

  toDatabase(entidade: any): CnNegocios {
    const novoNegocio = new CnNegocios();

    for (const chave in entidade) {
      if (!entidade.hasOwnProperty(chave)) {
        continue;
      }

      novoNegocio[chave] = entidade[chave];
    }

    return novoNegocio;
  },
};
