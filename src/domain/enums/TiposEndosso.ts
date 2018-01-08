export namespace TiposEndosso {
  export const TIPOS_ENDOSSO: object[] = [
    { codigo: 1, tipo: 'CO', nome: 'Cobrança' },
    { codigo: 2, tipo: 'RE', nome: 'Restituição' },
    { codigo: 3, tipo: 'SM', nome: 'Sem movimento' },
    { codigo: 4, tipo: 'CA', nome: 'Cancelamento' },
    { codigo: 5, tipo: 'FT', nome: 'Fatura' },
  ];

  export enum TipoEndosso {
    Cobranca = 1,
    Restituicao = 2,
    SemMovimento = 3,
    Cancelamento = 4,
    Fatura = 5,
  }

  export function endossoTipos(): number[] {
    return TIPOS_ENDOSSO.map((end: any) => {
      return end.codigo;
    });
  }
}
