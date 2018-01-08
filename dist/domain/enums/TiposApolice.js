"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TiposApolice;
(function (TiposApolice) {
    TiposApolice.TIPOS_APOLICE = [
        { codigo: 1, tipo: 'AN', nome: 'Apólice normal' },
        { codigo: 2, tipo: 'CM', nome: 'Coletiva mãe' },
        { codigo: 3, tipo: 'CF', nome: 'Coletiva filha' },
    ];
    let TipoApolice;
    (function (TipoApolice) {
        TipoApolice[TipoApolice["Normal"] = 1] = "Normal";
        TipoApolice[TipoApolice["ColetivaMae"] = 2] = "ColetivaMae";
        TipoApolice[TipoApolice["ColetivaFilha"] = 3] = "ColetivaFilha";
    })(TipoApolice = TiposApolice.TipoApolice || (TiposApolice.TipoApolice = {}));
    function apoliceCodigo() {
        return TiposApolice.TIPOS_APOLICE.map((apo) => {
            return apo.codigo;
        });
    }
    TiposApolice.apoliceCodigo = apoliceCodigo;
    function apoliceTipos() {
        return TiposApolice.TIPOS_APOLICE.map((apo) => {
            return apo.tipo;
        });
    }
    TiposApolice.apoliceTipos = apoliceTipos;
})(TiposApolice = exports.TiposApolice || (exports.TiposApolice = {}));
//# sourceMappingURL=TiposApolice.js.map