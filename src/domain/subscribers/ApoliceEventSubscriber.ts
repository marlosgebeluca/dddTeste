import { EventSubscriber, On } from 'event-dispatch';
import { events } from './events';
import { Logger } from '../../app/core/Logger';
import { Apolice } from '../../domain/entities/Apolice';
import { Service } from 'typedi';
const log = new Logger(__filename);

@Service('apolice.subscriber')
@EventSubscriber()
export class ApoliceEventSubscriber {

  @On(events.apolice.created)
  public onApoliceCreate(apolice: Apolice): void {
    log.info(`Apólice ${apolice.docNumProposta} não encontrada!`);
  }

  @On(events.apolice.notFound)
  public onApoliceNotFound(docNumProposta: number): void {
    log.info(`Apólice ${docNumProposta} não encontrada!`);
  }
}
