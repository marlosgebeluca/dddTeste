"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EndossoStatus;
(function (EndossoStatus) {
    EndossoStatus.ERROS = [
        { codigo: 200, descricao: 'Sucesso' },
        { codigo: 404, descricao: 'Endosso não encontrado' },
        { codigo: 500, descricao: 'Erro na apólice' },
    ];
    let StatusEndosso;
    (function (StatusEndosso) {
        StatusEndosso[StatusEndosso["SUCCESS"] = 200] = "SUCCESS";
        StatusEndosso[StatusEndosso["NOT_FOUND"] = 404] = "NOT_FOUND";
        StatusEndosso[StatusEndosso["ERROR"] = 500] = "ERROR";
    })(StatusEndosso = EndossoStatus.StatusEndosso || (EndossoStatus.StatusEndosso = {}));
    function apoliceStatus(codigo) {
        return EndossoStatus.ERROS.filter((erro) => {
            return erro.codigo === codigo;
        });
    }
    EndossoStatus.apoliceStatus = apoliceStatus;
})(EndossoStatus = exports.EndossoStatus || (exports.EndossoStatus = {}));
//# sourceMappingURL=EndossoStatus.js.map