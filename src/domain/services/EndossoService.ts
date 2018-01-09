import { Service, Inject } from 'typedi';
import { validate } from 'class-validator';
import { events } from '../../domain/subscribers/events';
import { EventDispatcher, EventDispatcherInterface } from '../../app/decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../app/decorators/Logger';

@Service('endosso.service')
export class EndossoService implements IEndossoService {
  private endossoRepository: IEndossoRepository;
  private endossoMapper: IMapper;

  constructor(
    @Inject('endosso.repository') endossoRepository: IEndossoRepository,
    @Inject('endosso.mapper') endossoMapper: IMapper,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {
    this.endossoRepository = endossoRepository;
    this.endossoMapper = endossoMapper;
  }

  public async find(params: any): Promise<IEndosso[]> {
    this.log.info('Buscando todos os endossos');
    return this.endossoRepository.find(params);
  }

  public async findOne(docNumProposta: number): Promise<IEndosso | undefined> {
    this.log.info(`Buscando endosso ${docNumProposta}`);
    return this.endossoRepository.findOne(docNumProposta);
  }

  public async create(endosso: IEndosso): Promise<IEndosso> {
    this.log.info('Criando novo endosso');

    endosso = this.endossoMapper.toClass(endosso);
    const erros = await validate(endosso);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.errors = erros;
      throw error;
    }

    const novoEndosso = await this.endossoRepository.save(endosso);
    this.eventDispatcher.dispatch(events.endosso.created, novoEndosso);

    return novoEndosso;
  }

  public async update(docNumProposta: number, endosso: IEndosso): Promise<IEndosso> {
    this.log.info(`Atualizando endosso ${docNumProposta}`);
    endosso.docNumProposta = docNumProposta;

    endosso = this.endossoMapper.toClass(endosso);
    const erros = await validate(endosso);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.details = erros;
      throw error;
    }

    const endossoAux = await this.endossoRepository.findOne(docNumProposta);

    if (endossoAux.docNumProposta === endosso.docNumProposta) {
      return this.endossoRepository.save(endosso);
    } else {
      throw Error('NOT_FOUND');
    }
  }

  public async delete(docNumProposta: number): Promise<string> {
    this.log.info(`Excluindo endosso ${docNumProposta}`);
    return this.endossoRepository.delete(docNumProposta);
  }
}
