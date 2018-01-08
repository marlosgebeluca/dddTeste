export namespace TiposFone {
  export const TIPOS_FONE: object[] = [
    { codigo: 1, nome: 'Celular' },
    { codigo: 2, nome: 'Residencial' },
    { codigo: 3, nome: 'Comercial' },
  ];

  export enum TipoFone {
    Celular = 1,
    Residencial = 2,
    Comercial = 3,
  }

  export function foneCodigo(): number[] {
    return TIPOS_FONE.map((fone: any) => {
      return fone.codigo;
    });
  }

  export function foneTipos(): string[] {
    return TIPOS_FONE.map((fone: any) => {
      return fone.tipo;
    });
  }
}
