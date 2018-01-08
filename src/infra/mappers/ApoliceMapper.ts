import { Service } from 'typedi';
import { Apolice } from '../../domain/entities/Apolice';
import { EmDoctos } from '../../infra/models/EmDoctos';

@Service('apolice.mapper')
export class ApoliceMapper implements IMapper {
  public toClass(objeto: Apolice): Apolice {
    const novaEntidade = new Apolice();

    for (const chave of Object.keys(objeto)) {
      (novaEntidade as any)[chave] = (objeto as any)[chave];
    }

    return novaEntidade;
  }

  public toEntity(registro: Apolice): Apolice {
    const novoEmDoctos = new Apolice();

    for (const chave in registro) {
      if (!registro.hasOwnProperty(chave) || novoEmDoctos.hasOwnProperty(chave)) {
        continue;
      }

      if (['docPropApolice', 'docTipoMovto'].indexOf(chave) < 0) {
        novoEmDoctos[chave] = registro[chave];
      }

      if (registro[chave] === 'S' && ['docFormaPagamento'].indexOf(chave) < 0) {
        novoEmDoctos[chave] = true;
      } else if (registro[chave] === 'N' && ['docFormaPagamento'].indexOf(chave) < 0) {
        novoEmDoctos[chave] = false;
      }
    }

    return novoEmDoctos;
  }

  public toDatabase(entidade: Apolice): EmDoctos {
    const novoEmDoctos = new EmDoctos();

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
}
