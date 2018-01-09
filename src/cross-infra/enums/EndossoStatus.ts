export namespace EndossoStatus {
  export const ERROS: any[] = [
    { codigo: 200, descricao: 'Sucesso' },
    { codigo: 404, descricao: 'Endosso não encontrado' },
    { codigo: 500, descricao: 'Erro na apólice' },
  ];

  export enum StatusEndosso {
    SUCCESS = 200,
    NOT_FOUND = 404,
    ERROR = 500,
  }

  export function apoliceStatus(codigo: number): string[] {
    return ERROS.filter((erro: any) => {
      return erro.codigo === codigo;
    });
  }
}
