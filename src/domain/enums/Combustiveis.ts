export namespace Combustiveis {
  export const COMBUSTIVEIS: object[] = [
    { codigo: 1, nome: 'Gasolina' },
    { codigo: 2, nome: 'Álcool' },
    { codigo: 3, nome: 'Diesel' },
    { codigo: 3, nome: 'Bi-combustível' },
  ];

  export enum Combustivel {
    Gasolina = 1,
    Alcool = 2,
    Diesel = 3,
    Bicombustivel = 4,
  }

  export function combustiveisEnum(): number[] {
    return COMBUSTIVEIS.map((comb: any) => {
      return comb.codigo;
    });
  }
}
