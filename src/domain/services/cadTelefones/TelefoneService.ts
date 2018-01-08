import { Service, Inject } from 'typedi';
import { events } from '../../../domain/subscribers/events';
import { validate } from 'class-validator';
import { EventDispatcher, EventDispatcherInterface } from '../../../app/decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../../app/decorators/Logger';
import { CadTelefonesRepository } from '../../../infra/repositories/CadTelefonesRepository';
import { Telefone } from '../../../domain/entities/cadTelefones/Telefone';

@Service()
export class TelefoneService {
  private cadTelefonesRepository: CadTelefonesRepository;

  constructor(
    @Inject(type => CadTelefonesRepository) cadTelefonesRepository: CadTelefonesRepository,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {
    this.cadTelefonesRepository = cadTelefonesRepository;
  }

  public async find(params: any[]): Promise<Telefone[]> {
    this.log.info('Buscando todos os telefones');
    return this.cadTelefonesRepository.find(params);
  }

  public async findOne(foneCodigo: number): Promise<Telefone | undefined> {
    this.log.info(`Buscando telefone ${foneCodigo}`);
    return this.cadTelefonesRepository.findOne(foneCodigo);
  }

  public async create(cadTelefones: Telefone): Promise<Telefone> {
    this.log.info('Criando novo telefone');

    const erros = await validate(cadTelefones);
    console.error(erros);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.details = erros;
      throw erros;
    }

    const novoApolice = await this.cadTelefonesRepository.save(cadTelefones);
    this.eventDispatcher.dispatch(events.calculo.created, novoApolice);
    return novoApolice;
  }

  public async update(foneCodigo: number, cadTelefones: Telefone): Promise<Telefone> {
    this.log.info(`Atualizando telefone ${foneCodigo}`);
    cadTelefones.foneCodigo = foneCodigo;

    const erros = await validate(cadTelefones);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.details = erros;
      throw error;
    }

    return this.cadTelefonesRepository.save(cadTelefones);
  }

  public async delete(foneCodigo: number): Promise<void> {
    this.log.info(`Excluindo telefone ${foneCodigo}`);
    return this.cadTelefonesRepository.delete(foneCodigo);
  }
}
