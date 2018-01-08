import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { CnNegocios } from '../models/cnNegocios/CnNegocios';
import { CnNegociosMapper } from '../mappers/CnNegociosMapper';
import { Negocio } from '../../domain/entities/cnNegocios/Negocio';

@Service()
export class CnNegociosRepository {
  private dbRepository = getRepository(CnNegocios);

  public async find(args: Negocio[]): Promise<Negocio[]> {
    const cnNegocios: any = await this.dbRepository.find({
      where: { ...args },
    });

    return cnNegocios.map(CnNegociosMapper.toEntity);
  }

  public async findOne(cnCodigo: number): Promise<Negocio | undefined> {
    const telefone: any = await this.dbRepository.findOne({ cnCodigo });
    return CnNegociosMapper.toEntity(telefone);
  }

  public async save(cnNegocios: Negocio): Promise<Negocio> {
    const novoTelefone = await this.dbRepository.save(
      CnNegociosMapper.toDatabase(cnNegocios)
    );
    return CnNegociosMapper.toEntity(novoTelefone);
  }

  public async delete(cnCodigo: number): Promise<void> {
    await this.dbRepository.delete(cnCodigo);
    return;
  }

}
