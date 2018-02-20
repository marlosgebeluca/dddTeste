import { Service, Inject } from 'typedi';
import { validate } from 'class-validator';
import { events } from '../../domain/subscribers/events';
import { EventDispatcher, EventDispatcherInterface } from '../../app/decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../app/decorators/Logger';
import { GerarJsonService } from './GerarJsonService';

@Service('apolice.service')
export class ApoliceService implements IApoliceService {
  private apoliceRepository: IApoliceRepository;
  private endossoService: IEndossoService;
  private apoliceMapper: IMapper;
  private jsonService: GerarJsonService;

  constructor(
    @Inject('apolice.repository') apoliceRepository: IApoliceRepository,
    @Inject('endosso.service') endossoService: IEndossoService,
    @Inject('apolice.mapper') apoliceMapper: IMapper,
    @Inject('gerarJson.service') jsonService: GerarJsonService,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {
    this.apoliceRepository = apoliceRepository;
    this.endossoService = endossoService;
    this.apoliceMapper = apoliceMapper;
    this.jsonService = jsonService;
  }

  public async find(params: any, gerarJson?: boolean): Promise<IApolice[]> {
    this.log.info('Buscando todos os apólices');
    const apolices = await this.apoliceRepository.find(params);

    if (gerarJson) {
      this.log.info('Gerando Json Apolice');
      for (const key of Object.keys(apolices)) {
        const apolice = apolices[key];
        apolices[key] = await this.jsonService.gerar(apolice, true);
      }
    }

    return apolices;
  }

  public async findOne(docNumProposta: number, gerarJson?: boolean): Promise<IApolice | undefined> {
    this.log.info(`Buscando apólice ${docNumProposta}`);
    let apolice = await this.apoliceRepository.findOne(docNumProposta);

    if (gerarJson) {
      this.log.info('Gerando Json Apolice');
      apolice = await this.jsonService.gerar(apolice);
    }

    return apolice;
  }

  public async create(apolice: IApolice, gerarJson?: boolean): Promise<IApolice> {
    this.log.info('Criando novo apólice');

    apolice = this.apoliceMapper.toClass(apolice);
    const erros = await validate(apolice);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.errors = erros;
      throw error;
    }

    const novoApolice = await this.apoliceRepository.save(apolice);
    novoApolice.docPropApolice = novoApolice.docNumProposta;
    this.eventDispatcher.dispatch(events.apolice.created, novoApolice);

    apolice = await this.apoliceRepository.save(novoApolice);

    if (gerarJson) {
      this.log.info('Gerando Json Apolice');
      apolice = await this.jsonService.gerar(apolice);
    }

    return apolice;
  }

  public async update(docNumProposta: number, apolice: IApolice, gerarJson?: boolean): Promise<IApolice> {
    this.log.info(`Atualizando apólice ${docNumProposta}`);
    apolice.docNumProposta = docNumProposta;

    apolice = this.apoliceMapper.toClass(apolice);
    const erros = await validate(apolice);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.errors = erros;
      throw error;
    }

    const apoliceAux = await this.apoliceRepository.findOne(docNumProposta);

    if (apoliceAux.docNumProposta === apolice.docNumProposta) {
      apolice = await this.apoliceRepository.save(apolice);

      if (gerarJson) {
        this.log.info('Gerando Json Apolice');
        apolice = await this.jsonService.gerar(apolice);
      }

      return apolice;
    } else {
      throw new Error('NOT_FOUND');
    }
  }

  public async delete(docNumProposta: number): Promise<string> {
    this.log.info(`Excluindo apólice ${docNumProposta}`);
    return this.apoliceRepository.delete(docNumProposta);
  }

  /**
   * Renovar apólice
   */
  public async renovarApolice(docNumProposta: number): Promise<IApolice> {
    this.log.info('Renovar Apólice');

    // Buscando documento
    const apolice = await this.apoliceRepository.findOne(docNumProposta);

    // Valida Campos alterados ao gerar uma nova apólice
    const dataAux = new Date();
    const inicioVigencia = dataAux.getFullYear() + '-' + (dataAux.getMonth() + 1) + '-' + dataAux.getDay();
    const fimVigencia = (dataAux.getFullYear() + 1) + '-' + (dataAux.getMonth() + 1) + '-' + dataAux.getDay();

    apolice.docInicioVigencia = inicioVigencia;
    apolice.docFinalVigencia = fimVigencia;
    apolice.docNumPropRenovada = apolice.docNumProposta;
    apolice.docRenovNumero = apolice.docApolice;
    apolice.docTipoComiss = +apolice.docTipoComiss;

    // Remove o numero da apólice antiga
    delete apolice.docNumProposta;

    // Valida a entidade
    const erros = await validate(apolice);

    if (erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.errors = erros;
      throw error;
    }

    // Insere nova apolice
    const novoApolice = await this.apoliceRepository.save(apolice);
    novoApolice.docPropApolice = novoApolice.docNumProposta;
    this.eventDispatcher.dispatch(events.apolice.created, novoApolice);

    return novoApolice;
  }

  public async gerarEndosso(docNumProposta: number, endosso: IEndosso): Promise<IEndosso> {
    this.log.info('Gerar Endosso');
    endosso.docPropApolice = docNumProposta;
    return this.endossoService.create(endosso);
  }

  public async findEndossos(docNumProposta: number): Promise<void> {
    this.log.info(`Buscando todos os endossos da apolice ${docNumProposta}`);
    return this.apoliceRepository.findEndossos(docNumProposta);
  }

}
