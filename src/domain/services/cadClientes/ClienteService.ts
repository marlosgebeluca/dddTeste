import { Service, Inject } from 'typedi';
import { events } from '../../../domain/subscribers/events';
import { validate } from 'class-validator';
import { EventDispatcher, EventDispatcherInterface } from '../../../app/decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../../app/decorators/Logger';
import { CadClientesRepository } from '../../../infra/repositories/CadClientesRepository';
import { Cliente } from '../../../domain/entities/cadClientes/Cliente';

@Service()
export class ClienteService {
  private cadClientesRepository: CadClientesRepository;

  constructor(
    @Inject(type => CadClientesRepository) cadClientesRepository: CadClientesRepository,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {
    this.cadClientesRepository = cadClientesRepository;
  }

  public async find(params: any[]): Promise<Cliente[]> {
    this.log.info('Buscando todos os clientes');
    return this.cadClientesRepository.find(params);
  }

  public async findOne(cliCodigo: number): Promise<Cliente | undefined> {
    this.log.info(`Buscando cliente ${cliCodigo}`);
    return this.cadClientesRepository.findOne(cliCodigo);
  }

  public async create(cadClientes: Cliente): Promise<Cliente> {
    this.log.info('Criando novo cliente');

    const erros = await validate(cadClientes);
    console.error(erros);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.details = erros;
      throw erros;
    }

    const novoApolice = await this.cadClientesRepository.save(cadClientes);
    this.eventDispatcher.dispatch(events.calculo.created, novoApolice);
    return novoApolice;
  }

  public async update(cliCodigo: number, cadClientes: Cliente): Promise<Cliente> {
    this.log.info(`Atualizando cliente ${cliCodigo}`);
    cadClientes.cliCodigo = cliCodigo;

    const erros = await validate(cadClientes);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.details = erros;
      throw error;
    }

    return this.cadClientesRepository.save(cadClientes);
  }

  public async delete(cliCodigo: number): Promise<void> {
    this.log.info(`Excluindo cliente ${cliCodigo}`);
    return this.cadClientesRepository.delete(cliCodigo);
  }
}
