"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import { IsIn, IsBoolean, IsOptional, IsNumber, MinLength, MaxLength} from 'class-validator';
const class_validator_1 = require("class-validator");
const CustomEnum = require("../enums/CustomEnums");
const CustomValidator = require("../validators/CustomValidator");
class Apolice {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Array)
], Apolice.prototype, "endossos", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidCliente(),
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "cliCodigo", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidCia(),
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ciaCodigo", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidRamo(),
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ramoCodigo", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidPtoVenda(),
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ptoCodigo", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDocApolice(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docApolice", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataProposta", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataEmissao", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataEntrada", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docInicioVigencia", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docFinalVigencia", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidQtdParcelas(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docQtdParcelas", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(CustomEnum.TiposSituacaoApolice.situacoesTipos()),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docSituacao", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], Apolice.prototype, "docComissAdic", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(CustomEnum.TiposComissao.comissaoCodigo()),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docTipoComiss", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docPrimeiraAVista", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(CustomEnum.TiposPagamento.pagamentoTipos()),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docFormaPagamento", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docRenovacaoInterna", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "cotacData", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataEnvioProposta", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataDistrenov", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(CustomEnum.TiposApolice.apoliceTipos()),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docTipoApolice", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "audInclusaoData", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "audAlteracaoData", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docSigiloso", void 0);
tslib_1.__decorate([
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataRecusa", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docComissOutrosServicos", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docGeracaoAutomatica", void 0);
exports.Apolice = Apolice;
//# sourceMappingURL=Apolice.js.map