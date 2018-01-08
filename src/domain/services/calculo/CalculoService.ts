import { Service, Inject } from 'typedi';
import { events } from '../../../domain/subscribers/events';
import { validate } from 'class-validator';
import { EventDispatcher, EventDispatcherInterface } from '../../../app/decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../../app/decorators/Logger';
import { CalculoRepository } from '../../../infra/repositories/CalculoRepository';
import { Calculo } from '../../../domain/entities/calculo/Calculo';
import { CalculoNotFoundError } from '../../../app/errors/calculo/CalculoNotFoundError';

@Service()
export class CalculoService {
  private calculoRepository: CalculoRepository;

  constructor(
    @Inject(type => CalculoRepository) calculoRepository: CalculoRepository,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    @Logger(__filename) private log: LoggerInterface
  ) {
    this.calculoRepository = calculoRepository;
  }

  public async find(): Promise<Calculo[]> {
    return this.calculoRepository.find();
  }

  public async findOne(calcNumero: number): Promise<Calculo | undefined> {
    const calculo: any = await this.calculoRepository.findOne(calcNumero);

    if (!calculo) {
      throw new CalculoNotFoundError();
    }

    return calculo;
  }

  public async create(calculo: Calculo): Promise<Calculo> {
    const erros = await validate(calculo);
    console.error(erros);

    if (erros && erros.length > 0) {
      const error: any = new Error('ValidationError');
      error.details = erros;
      throw erros;
    }

    const novoCalculo = await this.calculoRepository.save(calculo);
    this.eventDispatcher.dispatch(events.calculo.created, novoCalculo);
    return novoCalculo;
  }

  public async update(calcNumero: number, calculo: Calculo): Promise<Calculo> {
    this.log.info(`Atualizando cálculo ${calcNumero}`);
    const calculoAnterior: any = await this.calculoRepository.findOne(calcNumero);

    if (!calculo) {
      throw new CalculoNotFoundError();
    }

    for (const chave of Object.keys(calculo)) {
      calculoAnterior[chave] = calculo[chave];
    }

    calculoAnterior.calcNumero = calcNumero;

    const erros = await validate(calculoAnterior);

    if (erros.length) {
      const error: any = new Error('ValidationError');
      error.details = erros;
      throw error;
    }

    return this.calculoRepository.save(calculoAnterior);

    // this.log.info(`Atualizando cálculo ${calcNumero}`);
    // calculo.calcNumero = calcNumero;

    // const erros = await validate(calculo);

    // if (erros.length > 0) {
    //   const error: any = new Error('ValidationError');
    //   error.details = erros;
    //   throw error;
    // }

    // return this.calculoRepository.save(calculo);
  }

  public async delete(calcNumero: number): Promise<void> {
    return await this.calculoRepository.delete(calcNumero);
  }
}
