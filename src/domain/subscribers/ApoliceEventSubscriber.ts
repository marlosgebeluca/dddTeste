import { EventSubscriber, On } from 'event-dispatch';
import { events } from './events';
import { Logger } from '../../app/core/Logger';
import { Apolice } from '../../domain/entities/Apolice';
const log = new Logger(__filename);

@EventSubscriber()
export class ApoliceEventSubscriber {

  @On(events.apolice.created)
  public onApoliceCreate(apolice: Apolice): void {
    log.info(`Documento ${apolice.docNumProposta} criado!`);
  }
}
