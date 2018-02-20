
interface ICrudService {
  find(params: any, gerarJson?: boolean): Promise<any[]>;
  findOne(id: number, gerarJson?: boolean): Promise<any | undefined>;
  create(registro: any, gerarJson?: boolean): Promise<any>;
  update(id: number, registro: any, gerarJson?: boolean): Promise<any>;
  delete(id: number): Promise<string>;
}

interface ICrudRepository {
  find(params: any): Promise<any[]>;
  findOne(id: number): Promise<any | undefined>;
  save(registro: any): Promise<any>;
  delete(id: number): Promise<string>;
}
