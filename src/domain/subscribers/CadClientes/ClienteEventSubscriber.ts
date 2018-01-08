import { EventSubscriber, On } from 'event-dispatch';
import { events } from './../events';
import { Logger } from '../../../app/core/Logger';
import { Cliente } from '../../../domain/entities/cadClientes/Cliente';
const log = new Logger(__filename);

@EventSubscriber()
export class ClienteEventSubscriber {

  @On(events.cliente.created)
  public onClienteCreate(novoCliente: Cliente): void {
    log.info(`Documento ${novoCliente.cliCodigo} criado!`);
  }
}
