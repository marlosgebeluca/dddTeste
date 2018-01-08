"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TiposPagamento;
(function (TiposPagamento) {
    TiposPagamento.TIPOS_PAGAMENTO = [
        { codigo: 1, tipo: 'O', nome: 'Nota de seguro' },
        { codigo: 2, tipo: 'N', nome: 'Carnê/boleto' },
        { codigo: 3, tipo: 'S', nome: 'Débito em conta' },
        { codigo: 4, tipo: 'D', nome: 'Débito em conta (1ª Boleto)' },
        { codigo: 5, tipo: 'F', nome: 'Folha de pagamento' },
        { codigo: 6, tipo: 'R', nome: 'Cartão de crédito' },
        { codigo: 7, tipo: 'C', nome: 'Cheque pré' },
    ];
    let TipoPagamento;
    (function (TipoPagamento) {
        TipoPagamento[TipoPagamento["NotaSeguro"] = 1] = "NotaSeguro";
        TipoPagamento[TipoPagamento["CarneBoleto"] = 2] = "CarneBoleto";
        TipoPagamento[TipoPagamento["Debito"] = 3] = "Debito";
        TipoPagamento[TipoPagamento["Debito1Boleto"] = 4] = "Debito1Boleto";
        TipoPagamento[TipoPagamento["FolhaPagamento"] = 5] = "FolhaPagamento";
        TipoPagamento[TipoPagamento["CartaoCredito"] = 6] = "CartaoCredito";
        TipoPagamento[TipoPagamento["ChequePre"] = 7] = "ChequePre";
    })(TipoPagamento = TiposPagamento.TipoPagamento || (TiposPagamento.TipoPagamento = {}));
    function pagamentoCodigos() {
        return TiposPagamento.TIPOS_PAGAMENTO.map((pag) => {
            return pag.codigo;
        });
    }
    TiposPagamento.pagamentoCodigos = pagamentoCodigos;
    function pagamentoTipos() {
        return TiposPagamento.TIPOS_PAGAMENTO.map((pag) => {
            return pag.tipo;
        });
    }
    TiposPagamento.pagamentoTipos = pagamentoTipos;
})(TiposPagamento = exports.TiposPagamento || (exports.TiposPagamento = {}));
//# sourceMappingURL=TiposPagamento.js.map