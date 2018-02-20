"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeradorStatus;
(function (GeradorStatus) {
    GeradorStatus.ERROS = [
        { codigo: 200, descricao: 'Sucesso' },
        { codigo: 404, descricao: 'Gerador não encontrada' },
        { codigo: 500, descricao: 'Erro na Geração' },
    ];
    let StatusGerador;
    (function (StatusGerador) {
        StatusGerador[StatusGerador["SUCCESS"] = 200] = "SUCCESS";
        StatusGerador[StatusGerador["NOT_FOUND"] = 404] = "NOT_FOUND";
        StatusGerador[StatusGerador["ERROR"] = 500] = "ERROR";
    })(StatusGerador = GeradorStatus.StatusGerador || (GeradorStatus.StatusGerador = {}));
    function geradorStatus(codigo) {
        return GeradorStatus.ERROS.filter((erro) => {
            return erro.codigo === codigo;
        });
    }
    GeradorStatus.geradorStatus = geradorStatus;
})(GeradorStatus = exports.GeradorStatus || (exports.GeradorStatus = {}));
//# sourceMappingURL=GeradorStatus.js.map