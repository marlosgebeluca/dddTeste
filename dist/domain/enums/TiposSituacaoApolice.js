"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TiposSituacaoApolice;
(function (TiposSituacaoApolice) {
    TiposSituacaoApolice.TIPOS_SITUACAO = [
        { codigo: 1, tipo: 'A', nome: 'Ativa' },
        { codigo: 2, tipo: 'C', nome: 'Cancelada' },
        { codigo: 3, tipo: 'V', nome: 'Vencida' },
        { codigo: 4, tipo: 'R', nome: 'Renovada' },
        { codigo: 5, tipo: 'P', nome: 'Pré-proposta' },
        { codigo: 6, tipo: 'N', nome: 'Recusada' },
    ];
    let TipoSituacaoApolice;
    (function (TipoSituacaoApolice) {
        TipoSituacaoApolice[TipoSituacaoApolice["Ativa"] = 1] = "Ativa";
        TipoSituacaoApolice[TipoSituacaoApolice["Cancelada"] = 2] = "Cancelada";
        TipoSituacaoApolice[TipoSituacaoApolice["Vencida"] = 3] = "Vencida";
        TipoSituacaoApolice[TipoSituacaoApolice["Renovada"] = 4] = "Renovada";
        TipoSituacaoApolice[TipoSituacaoApolice["PreProposta"] = 5] = "PreProposta";
        TipoSituacaoApolice[TipoSituacaoApolice["Recusada"] = 6] = "Recusada";
    })(TipoSituacaoApolice = TiposSituacaoApolice.TipoSituacaoApolice || (TiposSituacaoApolice.TipoSituacaoApolice = {}));
    function situacoesCodigo() {
        return TiposSituacaoApolice.TIPOS_SITUACAO.map((tipo) => {
            return tipo.codigo;
        });
    }
    TiposSituacaoApolice.situacoesCodigo = situacoesCodigo;
    function situacoesTipos() {
        return TiposSituacaoApolice.TIPOS_SITUACAO.map((tipo) => {
            return tipo.tipo;
        });
    }
    TiposSituacaoApolice.situacoesTipos = situacoesTipos;
})(TiposSituacaoApolice = exports.TiposSituacaoApolice || (exports.TiposSituacaoApolice = {}));
//# sourceMappingURL=TiposSituacaoApolice.js.map