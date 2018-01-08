import { EventSubscriber, On } from 'event-dispatch';
import { events } from './../events';
import { Logger } from '../../../app/core/Logger';
import { Negocio } from '../../../domain/entities/cnNegocios/Negocio';
const log = new Logger(__filename);

@EventSubscriber()
export class NegocioEventSubscriber {

  @On(events.negocio.created)
  public onNegocioCreate(novoNegocio: Negocio): void {
    log.info(`Documento ${novoNegocio.cnCodigo} criado!`);
  }
}
