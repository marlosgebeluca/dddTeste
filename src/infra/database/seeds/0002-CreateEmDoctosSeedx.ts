import { SeedsInterface, FactoryInterface } from '../../../cross-infra/lib/seeds';
import { EmDoctos } from '../../models/EmDoctos';

export class CreateEmDoctosSeed implements SeedsInterface {
  public async seed(factory: FactoryInterface): Promise<any> {
    await factory.get(EmDoctos).create();
  }
}
