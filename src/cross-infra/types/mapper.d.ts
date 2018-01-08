interface IMapper {
  toClass(objeto: any): any;
  toEntity(registro: any): any;
  toDatabase(entidade: any): any;
}
