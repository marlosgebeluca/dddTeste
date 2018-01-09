import { Service, Inject } from 'typedi';
import { getRepository } from 'typeorm';
import { EmDoctos } from '../../models/EmDoctos';

@Service('apolice.repository')
export class ApoliceRepository implements IApoliceRepository {
  private dbRepository = getRepository(EmDoctos);
  private apoliceMapper: IMapper;

  constructor(
    @Inject('apolice.mapper') apoliceMapper: IMapper
  ) {
    this.apoliceMapper = apoliceMapper;
  }

  public async find(args: any): Promise<Apolice[]> {
    const emDoctos: any = await this.dbRepository.find({
      where: { ...args },
    });

    return emDoctos.filter(doc => {
      return doc.docTipoMovto === 'AP';
    }).map(this.apoliceMapper.toEntity);
  }

  public async findOne(docNumProposta: number): Promise<Apolice | undefined> {
    const emDocto: any = await this.dbRepository.findOne({ docNumProposta });
    const entidade: any = this.apoliceMapper.toEntity(emDocto);

    if (!emDocto || emDocto['docTipoMovto'] !== 'AP') {
      throw new Error('NOT_FOUND');
    } else {
      entidade.endossos = await this.findEndossos(docNumProposta);
    }

    return entidade;
  }

  public async save(apolice: Apolice): Promise<Apolice> {
    const db: EmDoctos = this.apoliceMapper.toDatabase(apolice);

    delete db.endossos;

    const novoEmDoctos: any = await this.dbRepository.save(db);
    const entidade: any = this.apoliceMapper.toEntity(novoEmDoctos);

    entidade.endossos = await this.findEndossos(entidade.docNumProposta);

    return entidade;
  }

  public async delete(docNumProposta: number): Promise<string> {
    const emDocto: any = await this.dbRepository.findOne({ docNumProposta });

    if (emDocto === undefined) {
      throw new Error('NOT_FOUND');
    } else if (emDocto.endossos && emDocto.endossos.length) {
      for (const endosso of emDocto.endossos) {
        await this.dbRepository.remove(endosso);
      }
    }

    await this.dbRepository.remove(emDocto);
    return 'Apólice ' + docNumProposta + ' excluida!';
  }

  public async findEndossos(docNumProposta: number): Promise<any> {
    const endossos = await getRepository(EmDoctos)
      .createQueryBuilder('emDoctos')
      .select('emDoctos.doc_num_proposta', 'endosso')
      .addSelect('emDoctos.doc_tipo_movto', 'tipo_endosso')
      .where('emDoctos.doc_prop_apolice = :id and emDoctos.doc_num_proposta <> :id', { id: docNumProposta })
      .getRawMany();

    return endossos;
  }
}
