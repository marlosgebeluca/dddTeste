export namespace TiposComissao {
  export const TIPOS_COMISSAO: object[] = [
    { codigo: 1, nome: 'Distribuída nas parcelas' },
    { codigo: 2, nome: 'Antecipada toda na 1ª Parcela' },
    { codigo: 3, nome: 'Antecipada até o limite do prêmio' },
    { codigo: 4, nome: 'Proporcional a tabela da seguradora' },
  ];

  export enum TipoComissao {
    Distribuida = 1,
    Antecipada1Parcela = 2,
    AntecipadaLimite = 3,
    Proporcional = 4,
  }

  export function comissaoCodigo(): number[] {
    return TIPOS_COMISSAO.map((com: any) => {
      return com.codigo;
    });
  }

  export function comissaoTipos(): string[] {
    return TIPOS_COMISSAO.map((tipo: any) => {
      return tipo.tipo;
    });
  }
}
