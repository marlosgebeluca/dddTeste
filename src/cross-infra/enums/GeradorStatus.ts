export namespace GeradorStatus {
  export const ERROS: any[] = [
    { codigo: 200, descricao: 'Sucesso' },
    { codigo: 404, descricao: 'Gerador não encontrada' },
    { codigo: 500, descricao: 'Erro na Geração' },
  ];

  export enum StatusGerador {
    SUCCESS = 200,
    NOT_FOUND = 404,
    ERROR = 500,
  }

  export function geradorStatus(codigo: number): string[] {
    return ERROS.filter((erro: any) => {
      return erro.codigo === codigo;
    });
  }
}
