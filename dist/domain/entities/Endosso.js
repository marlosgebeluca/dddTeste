"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const TiposComissao_1 = require("../enums/TiposComissao");
const TiposApolice_1 = require("../enums/TiposApolice");
const TiposSituacaoApolice_1 = require("../enums/TiposSituacaoApolice");
const TiposPagamento_1 = require("../enums/TiposPagamento");
const IsValidDate_1 = require("../validators/IsValidDate");
const TiposEndosso_1 = require("../enums/TiposEndosso");
const ExisteApolice_1 = require("../validators/ExisteApolice");
class Endosso {
}
tslib_1.__decorate([
    class_validator_1.IsIn(TiposEndosso_1.TiposEndosso.endossoTipos()),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docTipoMovto", void 0);
tslib_1.__decorate([
    ExisteApolice_1.ExisteApolice(),
    tslib_1.__metadata("design:type", Number)
], Endosso.prototype, "docPropApolice", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Array)
], Endosso.prototype, "endossos", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "docDataProposta", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "docDataEmissao", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "docDataEntrada", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "docInicioVigencia", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "docFinalVigencia", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(TiposSituacaoApolice_1.TiposSituacaoApolice.situacoesTipos()),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docSituacao", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], Endosso.prototype, "docComissAdic", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(TiposComissao_1.TiposComissao.comissaoCodigo()),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docTipoComiss", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docPrimeiraAVista", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(TiposPagamento_1.TiposPagamento.pagamentoTipos()),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docFormaPagamento", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docRenovacaoInterna", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "cotacData", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "docDataEnvioProposta", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "docDataDistrenov", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(TiposApolice_1.TiposApolice.apoliceTipos()),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docTipoApolice", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "audInclusaoData", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "audAlteracaoData", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docSigiloso", void 0);
tslib_1.__decorate([
    IsValidDate_1.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Endosso.prototype, "docDataRecusa", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docComissOutrosServicos", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Endosso.prototype, "docGeracaoAutomatica", void 0);
exports.Endosso = Endosso;
//# sourceMappingURL=Endosso.js.map