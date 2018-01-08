import { SeedsInterface, FactoryInterface } from '../../../cross-infra/lib/seeds';
import { CadClientes } from '../../../infra/models/cadClientes/CadClientes';

export class CreateCadClientesSeed implements SeedsInterface {
  public async seed(factory: FactoryInterface): Promise<any> {
    await factory
      .get(CadClientes)
      .createMany(10);
  }
}
