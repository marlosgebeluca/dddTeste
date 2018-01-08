import { Service, Inject } from 'typedi';
import { getRepository } from 'typeorm';
import { EmDoctos } from '../../models/EmDoctos';
import { EndossoNotFoundError } from '../../../app/errors/EndossoNotFoundError';

@Service('endosso.repository')
export class EndossoRepository implements IEndossoRepository {
  private dbRepository = getRepository(EmDoctos);
  private endossoMapper: IMapper;

  constructor(
    @Inject('endosso.mapper') endossoMapper: IMapper
  ) {
    this.endossoMapper = endossoMapper;
  }

  public async find(args: Endosso[]): Promise<Endosso[]> {
    const emDoctos: any = await this.dbRepository.find({
      select: [
        'docNumProposta',
        'docPropApolice',
        'cliCodigo',
        'ramoCodigo',
        'docApolice',
        'docTipoMovto',
      ],
      where: { ...args },
    });

    return emDoctos.filter(doc => {
      return doc.docTipoMovto !== 'AP';
    }).map(this.endossoMapper.toEntity);
  }

  public async findOne(docNumProposta: number): Promise<Endosso | undefined> {
    const emDocto: any = await this.dbRepository.findOne({ docNumProposta });
    const entidade: any = this.endossoMapper.toEntity(emDocto);

    if (entidade['docTipoMovto'] === 'AP') {
      throw new EndossoNotFoundError();
    }

    return entidade;
  }

  public async save(endosso: Endosso): Promise<Endosso> {
    const db: EmDoctos = this.endossoMapper.toDatabase(endosso);

    const novoEmDoctos: any = await this.dbRepository.save(db);
    const entidade: any = this.endossoMapper.toEntity(novoEmDoctos);

    return entidade;
  }

  public async delete(docNumProposta: number): Promise<string> {
    const emDocto: any = await this.dbRepository.findOne({ docNumProposta });

    if (emDocto === undefined || emDocto.docTipoMovto === 'AP') {
      throw new EndossoNotFoundError();
    }

    await this.dbRepository.remove(emDocto);
    return 'Endosso ' + docNumProposta + ' excluido!';
  }

}
