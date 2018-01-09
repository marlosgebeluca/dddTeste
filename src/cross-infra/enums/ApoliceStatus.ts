export namespace ApoliceStatus {
  export const ERROS: any[] = [
    { codigo: 200, descricao: 'Sucesso' },
    { codigo: 404, descricao: 'Apólice não encontrada' },
    { codigo: 500, descricao: 'Erro na apólice' },
  ];

  export enum StatusApolice {
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
