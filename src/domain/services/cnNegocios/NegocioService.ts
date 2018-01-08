import { Service, Inject } from 'typedi';
import { events } from '../../../domain/subscribers/events';
import { validate } from 'class-validator';
import { EventDispatcher, EventDispatcherInterface } from '../../../app/decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../../app/decorators/Logger';
import { CnNegociosRepository } from '../../../infra/repositories/CnNegociosRepository';
import { Negocio } from '../../../domain/entities/cnNegocios/Negocio';

@Service()
export class NegocioService {
  private cnNegociosRepository: CnNegociosRepository;

  constructor(
    @Inject(type => CnNegociosRepository) cnNegociosRepository: CnNegociosRepository,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {
    this.cnNegociosRepository = cnNegociosRepository;
  }

  public async find(params: any[]): Promise<Negocio[]> {
    this.log.info('Buscando todos os negócios');
    return this.cnNegociosRepository.find(params);
  }

  public async findOne(cnCodigo: number): Promise<Negocio | undefined> {
    this.log.info(`Buscando negócio ${cnCodigo}`);
    return this.cnNegociosRepository.findOne(cnCodigo);
  }

  public async create(cnNegocios: Negocio): Promise<Negocio> {
    this.log.info('Criando novo negócio');

    const erros = await validate(cnNegocios);
    console.error(erros);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.details = erros;
      throw erros;
    }

    const novoApolice = await this.cnNegociosRepository.save(cnNegocios);
    this.eventDispatcher.dispatch(events.calculo.created, novoApolice);
    return novoApolice;
  }

  public async update(cnCodigo: number, cnNegocios: Negocio): Promise<Negocio> {
    this.log.info(`Atualizando negócio ${cnCodigo}`);
    cnNegocios.cnCodigo = cnCodigo;

    const erros = await validate(cnNegocios);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.details = erros;
      throw error;
    }

    return this.cnNegociosRepository.save(cnNegocios);
  }

  public async delete(cnCodigo: number): Promise<void> {
    this.log.info(`Excluindo negócio ${cnCodigo}`);
    return this.cnNegociosRepository.delete(cnCodigo);
  }
}
