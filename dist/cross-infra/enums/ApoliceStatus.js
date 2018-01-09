"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApoliceStatus;
(function (ApoliceStatus) {
    ApoliceStatus.ERROS = [
        { codigo: 200, descricao: 'Sucesso' },
        { codigo: 404, descricao: 'Apólice não encontrada' },
        { codigo: 500, descricao: 'Erro na apólice' },
    ];
    let StatusApolice;
    (function (StatusApolice) {
        StatusApolice[StatusApolice["SUCCESS"] = 200] = "SUCCESS";
        StatusApolice[StatusApolice["NOT_FOUND"] = 404] = "NOT_FOUND";
        StatusApolice[StatusApolice["ERROR"] = 500] = "ERROR";
    })(StatusApolice = ApoliceStatus.StatusApolice || (ApoliceStatus.StatusApolice = {}));
    function apoliceStatus(codigo) {
        return ApoliceStatus.ERROS.filter((erro) => {
            return erro.codigo === codigo;
        });
    }
    ApoliceStatus.apoliceStatus = apoliceStatus;
})(ApoliceStatus = exports.ApoliceStatus || (exports.ApoliceStatus = {}));
//# sourceMappingURL=ApoliceStatus.js.map