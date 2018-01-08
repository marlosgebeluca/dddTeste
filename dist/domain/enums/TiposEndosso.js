"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TiposEndosso;
(function (TiposEndosso) {
    TiposEndosso.TIPOS_ENDOSSO = [
        { codigo: 1, tipo: 'CO', nome: 'Cobrança' },
        { codigo: 2, tipo: 'RE', nome: 'Restituição' },
        { codigo: 3, tipo: 'SM', nome: 'Sem movimento' },
        { codigo: 4, tipo: 'CA', nome: 'Cancelamento' },
        { codigo: 5, tipo: 'FT', nome: 'Fatura' },
    ];
    let TipoEndosso;
    (function (TipoEndosso) {
        TipoEndosso[TipoEndosso["Cobranca"] = 1] = "Cobranca";
        TipoEndosso[TipoEndosso["Restituicao"] = 2] = "Restituicao";
        TipoEndosso[TipoEndosso["SemMovimento"] = 3] = "SemMovimento";
        TipoEndosso[TipoEndosso["Cancelamento"] = 4] = "Cancelamento";
        TipoEndosso[TipoEndosso["Fatura"] = 5] = "Fatura";
    })(TipoEndosso = TiposEndosso.TipoEndosso || (TiposEndosso.TipoEndosso = {}));
    function endossoTipos() {
        return TiposEndosso.TIPOS_ENDOSSO.map((end) => {
            return end.codigo;
        });
    }
    TiposEndosso.endossoTipos = endossoTipos;
})(TiposEndosso = exports.TiposEndosso || (exports.TiposEndosso = {}));
//# sourceMappingURL=TiposEndosso.js.map