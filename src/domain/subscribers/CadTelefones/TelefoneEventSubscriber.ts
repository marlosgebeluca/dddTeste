import { EventSubscriber, On } from 'event-dispatch';
import { events } from './../events';
import { Logger } from '../../../app/core/Logger';
import { Telefone } from '../../../domain/entities/cadTelefones/Telefone';
const log = new Logger(__filename);

@EventSubscriber()
export class TelefoneEventSubscriber {

  @On(events.telefone.created)
  public onTelefoneCreate(novoTelefone: Telefone): void {
    log.info(`Documento ${novoTelefone.foneCodigo} criado!`);
  }
}
