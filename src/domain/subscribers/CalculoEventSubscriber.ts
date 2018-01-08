import { EventSubscriber, On } from 'event-dispatch';
import { events } from './events';
import { Logger } from '../../app/core/Logger';
import { Calculo } from '../../domain/entities/calculo/Calculo';
const log = new Logger(__filename);

@EventSubscriber()
export class CalculoEventSubscriber {
  @On(events.calculo.created)
  public onCalculoCreate(novoCalculo: Calculo): void {
    log.info(`Cálculo ${novoCalculo.calcNumero} criado!`);
  }
}
