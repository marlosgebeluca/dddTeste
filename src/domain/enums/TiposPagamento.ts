export namespace TiposPagamento {
  export const TIPOS_PAGAMENTO: object[] = [
    { codigo: 1, tipo: 'O', nome: 'Nota de seguro' },
    { codigo: 2, tipo: 'N', nome: 'Carnê/boleto' },
    { codigo: 3, tipo: 'S', nome: 'Débito em conta' },
    { codigo: 4, tipo: 'D', nome: 'Débito em conta (1ª Boleto)' },
    { codigo: 5, tipo: 'F', nome: 'Folha de pagamento' },
    { codigo: 6, tipo: 'R', nome: 'Cartão de crédito' },
    { codigo: 7, tipo: 'C', nome: 'Cheque pré' },
  ];

  export enum TipoPagamento {
    NotaSeguro = 1,
    CarneBoleto = 2,
    Debito = 3,
    Debito1Boleto = 4,
    FolhaPagamento = 5,
    CartaoCredito = 6,
    ChequePre = 7,

  }

  export function pagamentoCodigos(): number[] {
    return TIPOS_PAGAMENTO.map((pag: any) => {
      return pag.codigo;
    });
  }

  export function pagamentoTipos(): string[] {
    return TIPOS_PAGAMENTO.map((pag: any) => {
      return pag.tipo;
    });
  }
}
