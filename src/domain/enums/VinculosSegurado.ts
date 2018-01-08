export namespace VinculosSegurado {
  export const VINCULOS: object[] = [
    { codigo: 1, nome: 'O próprio' },
    { codigo: 2, nome: 'Filho(a)' },
    { codigo: 3, nome: 'Cônjuge'},
  ];

  export enum VinculoSegurado {
    Proprio = 1,
    Filho = 2,
    Cojuge = 3,
  }

  export function vinculosEnum(): number[] {
    return VINCULOS.map((vinc: any) => {
      return vinc.codigo;
    });
  }
}
