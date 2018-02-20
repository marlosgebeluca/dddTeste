"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import { IsIn, IsBoolean, IsOptional, IsNumber, MinLength, MaxLength} from 'class-validator';
const class_validator_1 = require("class-validator");
const CustomEnum = require("../enums/CustomEnums");
const CustomValidator = require("../validators/CustomValidator");
const CustomDecorator_1 = require("../decorators/CustomDecorator");
class Apolice {
}
tslib_1.__decorate([
    CustomDecorator_1.Label('Numero da Proposta'),
    CustomDecorator_1.TamanhoX(20),
    CustomDecorator_1.TamanhoY(20),
    CustomDecorator_1.TipoCampo('select'),
    CustomDecorator_1.Hide(true),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docNumProposta", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Array)
], Apolice.prototype, "endossos", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    CustomDecorator_1.Label('Código do cliente'),
    CustomDecorator_1.TamanhoX(10),
    CustomDecorator_1.TamanhoY(10),
    CustomDecorator_1.TipoCampo('select'),
    CustomDecorator_1.CampoPersonalizado(true),
    CustomDecorator_1.Hide('docNumProposta < 0'),
    CustomDecorator_1.ApareceRelacao(true),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "cliCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidCia(),
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ciaCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidRamo(),
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ramoCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidPtoVenda(),
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ptoCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDocApolice(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docApolice", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataProposta", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataEmissao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataEntrada", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docInicioVigencia", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docFinalVigencia", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidQtdParcelas(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docQtdParcelas", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsIn(CustomEnum.TiposSituacaoApolice.situacoesTipos()),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docSituacao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docRenovNumero", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ciaCodigoRenov", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docAnotacoes", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], Apolice.prototype, "docComissAdic", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docPropUltMov", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsIn(CustomEnum.TiposComissao.comissaoCodigo()),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docTipoComiss", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docAgenciaDebito", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docPrimeiraAVista", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "cliCodigoEstipulante", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsIn(CustomEnum.TiposPagamento.pagamentoTipos()),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docFormaPagamento", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "cliCodigoSubestipulante", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docRenovacaoInterna", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docControle", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docBonusIndicacao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ciaRegCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "moedaCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "cotacData", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docAdicionalFrac", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docCusto", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "cliCodigoIndicacao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docIof", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docPremioTotal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataEnvioProposta", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docPercComissao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "estrutCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docPercComissaoExtra", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docComissao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "sitrenCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docPercComissaoTotal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataDistrenov", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docDescComissao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "rrepCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docMesBaseRenovacao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docContaDebito", void 0);
tslib_1.__decorate([
    class_validator_1.IsIn(CustomEnum.TiposApolice.apoliceTipos()),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docTipoApolice", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docPremioServicoAdic", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docApolice2", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docPrimeiraParcela", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "tpMovCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "bcoCodigoDebito", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "audInclusaoUsr", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "audInclusaoData", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "audAlteracaoUsr", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "audAlteracaoData", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docTipo6", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docNumProposta6", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docComissaoOriginal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docCodigoOrigem", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docIdentificacao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docIntervaloVenc", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docArquivoNumero", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docSigiloso", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docPremioLiquidoOriginal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docAdicionalFracOriginal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docLivroNumeroSusep", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docLivroPaginaSusep", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docLivroRegistroSusep", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ciaCodigoOriginal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ptoCodigoOriginal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "ramoCodigoOriginal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "vendCodigosOriginal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "ccoCodigosOriginal", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docoriCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "cnCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "CliDivCodigo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    CustomValidator.IsValidDate(),
    tslib_1.__metadata("design:type", Date)
], Apolice.prototype, "docDataRecusa", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "tpmovCodigoRecusa", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docCedenteBoleto", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docCodigoNegociacao", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docDiaVencimento", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docComissOutrosServicos", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "docNumPropRenovada", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", String)
], Apolice.prototype, "docGeracaoAutomatica", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "numPedido", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], Apolice.prototype, "numSequencia", void 0);
exports.Apolice = Apolice;
//# sourceMappingURL=Apolice.js.map