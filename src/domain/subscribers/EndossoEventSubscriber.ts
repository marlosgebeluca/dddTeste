import { EventSubscriber, On } from 'event-dispatch';
import { events } from './events';
import { Logger } from '../../app/core/Logger';
import { Endosso } from '../../domain/entities/Endosso';
const log = new Logger(__filename);

@EventSubscriber()
export class EndossoEventSubscriber {

  @On(events.endosso.created)
  public onEndossoCreate(endosso: Endosso): void {
    log.info(`Documento ${endosso.docNumProposta} criado!`);
  }
}
