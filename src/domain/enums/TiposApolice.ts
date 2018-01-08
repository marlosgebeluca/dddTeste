export namespace TiposApolice {
  export const TIPOS_APOLICE: object[] = [
    { codigo: 1, tipo: 'AN', nome: 'Apólice normal' },
    { codigo: 2, tipo: 'CM', nome: 'Coletiva mãe' },
    { codigo: 3, tipo: 'CF', nome: 'Coletiva filha' },
  ];

  export enum TipoApolice {
    Normal = 1,
    ColetivaMae = 2,
    ColetivaFilha = 3,
  }

  export function apoliceCodigo(): number[] {
    return TIPOS_APOLICE.map((apo: any) => {
      return apo.codigo;
    });
  }

  export function apoliceTipos(): string[] {
    return TIPOS_APOLICE.map((apo: any) => {
      return apo.tipo;
    });
  }
}
