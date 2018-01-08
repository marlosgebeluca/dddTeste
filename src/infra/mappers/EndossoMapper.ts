import { Service } from 'typedi';
import { Endosso } from '../../domain/entities/Endosso';
import { EmDoctos } from '../../infra/models/EmDoctos';

@Service('endosso.mapper')
export class EndossoMapper implements IMapper {
  public toClass(objeto: Endosso): Endosso {
    const novaEntidade = new Endosso();

    for (const chave of Object.keys(objeto)) {
      (novaEntidade as any)[chave] = (objeto as any)[chave];
    }

    return novaEntidade;
  }

  public toEntity(registro: Endosso): Endosso {
    let novoEmDoctos;

    novoEmDoctos = new Endosso();

    for (const chave in registro) {
      if (!registro.hasOwnProperty(chave)) {
        continue;
      }

      novoEmDoctos[chave] = registro[chave];
    }

    return novoEmDoctos;
  }

  public toDatabase(entidade: Endosso): EmDoctos {
    const novoEmDoctos = new EmDoctos();

    for (const chave in entidade) {
      if (!entidade.hasOwnProperty(chave)) {
        continue;
      }

      novoEmDoctos[chave] = entidade[chave];
    }

    if (+novoEmDoctos['docTipoMovto'] === 1) {
      novoEmDoctos['docTipoMovto'] = 'CO';
    } else if (+novoEmDoctos['docTipoMovto'] === 2) {
      novoEmDoctos['docTipoMovto'] = 'RE';
    } else if (+novoEmDoctos['docTipoMovto'] === 3) {
      novoEmDoctos['docTipoMovto'] = 'SM';
    } else if (+novoEmDoctos['docTipoMovto'] === 4) {
      novoEmDoctos['docTipoMovto'] = 'CA';
    } else {
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
}
