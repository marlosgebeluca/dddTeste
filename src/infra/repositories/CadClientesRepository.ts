import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { CadClientes } from '../models/cadClientes/CadClientes';
import { CadClientesMapper } from '../mappers/CadClientesMapper';
import { Cliente } from '../../domain/entities/cadClientes/Cliente';

@Service()
export class CadClientesRepository {
  private dbRepository = getRepository(CadClientes);

  public async find(args: Cliente[]): Promise<Cliente[]> {
    const cadTelefones: any = await this.dbRepository.find({
      where: { ...args },
    });

    return cadTelefones.map(CadClientesMapper.toEntity);
  }

  public async findOne(cliCodigo: number): Promise<Cliente | undefined> {
    const cliente: any = await this.dbRepository.findOne({ cliCodigo });
    return CadClientesMapper.toEntity(cliente);
  }

  public async save(cadTelefones: Cliente): Promise<Cliente> {
    const novoCliente = await this.dbRepository.save(
      CadClientesMapper.toDatabase(cadTelefones)
    );
    return CadClientesMapper.toEntity(novoCliente);
  }

  public async delete(cliCodigo: number): Promise<void> {
    await this.dbRepository.delete(cliCodigo);
    return;
  }

}
