import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { Calculo } from '../models/calculo/Calculo';
import { Condutor } from '../models/condutor/Condutor';
import { CalculoSeguradora } from '../models/calculoSeguradora/CalculoSeguradora';
import { CalculoMapper } from '../mappers/CalculoMapper';
import * as CalculoDTO from '../../domain/entities/calculo/Calculo';

@Service()
export class CalculoRepository {
  private calculoDbRepository = getRepository(Calculo);
  private condutorDbRepository = getRepository(Condutor);
  private calculoSeguradoraDbRepository = getRepository(CalculoSeguradora);

  public async find(...args: any[]): Promise<CalculoDTO.Calculo[]> {
    const calculos: any[] = await this.calculoDbRepository.find(...args, {
      relations: ['seguradoras', 'condutores'],
    });

    return calculos.map(CalculoMapper.toEntity);
  }

  public async findOne(calcNumero: number): Promise<CalculoDTO.Calculo | undefined> {
    const calculo = await this.calculoDbRepository.findOne(calcNumero, {
      relations: ['seguradoras', 'condutores'],
    });

    if (calculo) {
      return CalculoMapper.toEntity(calculo);
    }

    return;
  }

  public async save(calculo: CalculoDTO.Calculo): Promise<CalculoDTO.Calculo> {
    const novoCalculo: any = await this.calculoDbRepository.save(
      CalculoMapper.toDatabase(calculo)
    );

    return CalculoMapper.toEntity(novoCalculo);
  }

  public async delete(calcNumero: number): Promise<void> {
    const calculo = await this.calculoDbRepository.findOne(calcNumero, {
      relations: ['seguradoras', 'condutores'],
    });

    await this.condutorDbRepository.delete({ calculo });
    await this.calculoSeguradoraDbRepository.delete({ calculo });
    await this.calculoDbRepository.delete({ calcNumero });
    return;
  }
}
