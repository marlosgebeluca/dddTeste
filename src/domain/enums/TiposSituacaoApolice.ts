export namespace TiposSituacaoApolice {
  export const TIPOS_SITUACAO: object[] = [
    { codigo: 1, tipo: 'A', nome: 'Ativa' },
    { codigo: 2, tipo: 'C', nome: 'Cancelada' },
    { codigo: 3, tipo: 'V', nome: 'Vencida' },
    { codigo: 4, tipo: 'R', nome: 'Renovada' },
    { codigo: 5, tipo: 'P', nome: 'Pré-proposta' },
    { codigo: 6, tipo: 'N', nome: 'Recusada' },
  ];

  export enum TipoSituacaoApolice {
    Ativa = 1,
    Cancelada = 2,
    Vencida = 3,
    Renovada = 4,
    PreProposta = 5,
    Recusada = 6,
  }

  export function situacoesCodigo(): number[] {
    return TIPOS_SITUACAO.map((tipo: any) => {
      return tipo.codigo;
    });
  }

  export function situacoesTipos(): string[] {
    return TIPOS_SITUACAO.map((tipo: any) => {
      return tipo.tipo;
    });
  }
}
