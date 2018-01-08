import { SeedsInterface, FactoryInterface } from '../../../cross-infra/lib/seeds';
import { CadTelefones } from '../../models/cadTelefones/CadTelefones';

export class CreateCadTelefonesSeed implements SeedsInterface {
  public async seed(factory: FactoryInterface): Promise<any> {
    await factory
      .get(CadTelefones)
      .createMany(5);
  }
}
