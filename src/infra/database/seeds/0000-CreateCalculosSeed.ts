import { SeedsInterface, FactoryInterface } from '../../../cross-infra/lib/seeds';
import { Calculo } from '../../models/calculo/Calculo';

export class CreateCalculosSeed implements SeedsInterface {
  public async seed(factory: FactoryInterface): Promise<any> {
    await factory
      .get(Calculo)
      .create();
  }
}
