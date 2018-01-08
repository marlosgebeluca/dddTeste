"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TiposComissao;
(function (TiposComissao) {
    TiposComissao.TIPOS_COMISSAO = [
        { codigo: 1, nome: 'Distribuída nas parcelas' },
        { codigo: 2, nome: 'Antecipada toda na 1ª Parcela' },
        { codigo: 3, nome: 'Antecipada até o limite do prêmio' },
        { codigo: 4, nome: 'Proporcional a tabela da seguradora' },
    ];
    let TipoComissao;
    (function (TipoComissao) {
        TipoComissao[TipoComissao["Distribuida"] = 1] = "Distribuida";
        TipoComissao[TipoComissao["Antecipada1Parcela"] = 2] = "Antecipada1Parcela";
        TipoComissao[TipoComissao["AntecipadaLimite"] = 3] = "AntecipadaLimite";
        TipoComissao[TipoComissao["Proporcional"] = 4] = "Proporcional";
    })(TipoComissao = TiposComissao.TipoComissao || (TiposComissao.TipoComissao = {}));
    function comissaoCodigo() {
        return TiposComissao.TIPOS_COMISSAO.map((com) => {
            return com.codigo;
        });
    }
    TiposComissao.comissaoCodigo = comissaoCodigo;
    function comissaoTipos() {
        return TiposComissao.TIPOS_COMISSAO.map((tipo) => {
            return tipo.tipo;
        });
    }
    TiposComissao.comissaoTipos = comissaoTipos;
})(TiposComissao = exports.TiposComissao || (exports.TiposComissao = {}));
//# sourceMappingURL=TiposComissao.js.map