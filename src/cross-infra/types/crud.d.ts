
interface ICrudService {
  find(params: any[]): Promise<any[]>;
  findOne(id: number): Promise<any | undefined>;
  create(registro: any): Promise<any>;
  update(id: number, registro: any): Promise<any>;
  delete(id: number): Promise<string>;
}

interface ICrudRepository {
  find(params: any[]): Promise<any[]>;
  findOne(id: number): Promise<any | undefined>;
  save(registro: any): Promise<any>;
  delete(id: number): Promise<string>;
}
