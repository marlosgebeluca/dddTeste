import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { CadTelefones } from '../models/cadTelefones/CadTelefones';
import { CadTelefonesMapper } from '../mappers/CadTelefonesMapper';
import { Telefone } from '../../domain/entities/cadTelefones/Telefone';

@Service()
export class CadTelefonesRepository {
  private dbRepository = getRepository(CadTelefones);

  public async find(args: Telefone[]): Promise<Telefone[]> {
    const cadTelefones: any = await this.dbRepository.find({
      where: { ...args },
    });

    return cadTelefones.map(CadTelefonesMapper.toEntity);
  }

  public async findOne(foneCodigo: number): Promise<Telefone | undefined> {
    const telefone: any = await this.dbRepository.findOne({ foneCodigo });
    return CadTelefonesMapper.toEntity(telefone);
  }

  public async save(cadTelefones: Telefone): Promise<Telefone> {
    const novoTelefone = await this.dbRepository.save(
      CadTelefonesMapper.toDatabase(cadTelefones)
    );
    return CadTelefonesMapper.toEntity(novoTelefone);
  }

  public async delete(foneCodigo: number): Promise<void> {
    await this.dbRepository.delete(foneCodigo);
    return;
  }

}
