import { Service } from 'typedi';
import { getLabel, getTamanhoX, getTamanhoY, getHide, getTipoCampo, getCampoPersonalizado, getApareceRelacao} from '../decorators/CustomDecorator';

@Service('gerarJson.service')
export class GerarJsonService {

  public async gerar(classe: any, relacao?: boolean): Promise<any> {
    const retorno: object[] = [];

    for (const key of Object.keys(classe)) {
      const prop = {
        label: getLabel(classe, key),
        tipoCampo: getTipoCampo(classe, key),
        personalizado: getCampoPersonalizado(classe, key),
        tamanhoX: getTamanhoX(classe, key),
        tamanhoY: getTamanhoY(classe, key),
        hide: getHide(classe, key),
        apareceRelacao: getApareceRelacao(classe, key),
      };

      if (prop.label !== undefined
        || prop.tipoCampo !== undefined
        || prop.personalizado !== undefined
        || prop.tamanhoX !== undefined
        || prop.tamanhoY !== undefined
        || prop.hide !== undefined
        || prop.apareceRelacao !== undefined) {

        const ret = {
          chave: key,
          valor: classe[key],
          propriedades: prop,
        };

        if (relacao) {
          if (prop.apareceRelacao) {
            retorno.push(ret);
          }
        } else {
          retorno.push(ret);
        }
      }
    }

    return retorno;
  }
}
