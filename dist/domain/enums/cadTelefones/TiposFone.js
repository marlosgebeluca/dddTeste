"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TiposFone;
(function (TiposFone) {
    TiposFone.TIPOS_FONE = [
        { codigo: 1, nome: 'Celular' },
        { codigo: 2, nome: 'Residencial' },
        { codigo: 3, nome: 'Comercial' },
    ];
    let TipoFone;
    (function (TipoFone) {
        TipoFone[TipoFone["Celular"] = 1] = "Celular";
        TipoFone[TipoFone["Residencial"] = 2] = "Residencial";
        TipoFone[TipoFone["Comercial"] = 3] = "Comercial";
    })(TipoFone = TiposFone.TipoFone || (TiposFone.TipoFone = {}));
    function foneCodigo() {
        return TiposFone.TIPOS_FONE.map((fone) => {
            return fone.codigo;
        });
    }
    TiposFone.foneCodigo = foneCodigo;
    function foneTipos() {
        return TiposFone.TIPOS_FONE.map((fone) => {
            return fone.tipo;
        });
    }
    TiposFone.foneTipos = foneTipos;
})(TiposFone = exports.TiposFone || (exports.TiposFone = {}));
//# sourceMappingURL=TiposFone.js.map