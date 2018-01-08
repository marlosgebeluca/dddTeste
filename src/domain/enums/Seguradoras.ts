export namespace Seguradoras {
  export const CIAS: object[] = [
    { codigo: 5444, nome: 'Bradesco', ativa: true },
    { codigo: 5886, nome: 'Porto Seguro', ativa: true },
    { codigo: 5355, nome: 'Azul', ativa: true },
    { codigo: 5321, nome: 'Itaú', ativa: true },
    { codigo: 9898, nome: 'Outra cia', ativa: false },
  ];

  export enum Seguradora {
    Bradesco = 5444,
    Porto = 5886,
    Azul = 5355,
    Itau = 5321,
    Outra = 9898,
  }

  export function seguradorasAtivas(): object[] {
    return CIAS.filter((cia: any) => {
      return cia.ativa;
    });
  }

  export function seguradorasAtivasEnum(): number[] {
    return CIAS.map((cia: any) => {
      if (cia.ativa) {
        return cia.codigo;
      }
    });
  }

  export function seguradorasEnum(): number[] {
    return CIAS.map((cia: any) => {
      return cia.codigo;
    });
  }
}
