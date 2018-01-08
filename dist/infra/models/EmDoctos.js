"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let EmDoctos = EmDoctos_1 = class EmDoctos {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'doc_num_proposta' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docNumProposta", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_prop_apolice', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docPropApolice", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => EmDoctos_1, endosso => endosso.docPropApolice),
    tslib_1.__metadata("design:type", Array)
], EmDoctos.prototype, "endossos", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_tipo_movto', type: 'char', length: 2 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docTipoMovto", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cli_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "cliCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cia_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "ciaCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'ramo_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "ramoCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'pto_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "ptoCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_apolice', type: 'varchar', length: 30 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docApolice", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_endosso', type: 'varchar', length: 30 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docEndosso", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_data_proposta', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "docDataProposta", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_data_emissao', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "docDataEmissao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_data_entrada', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "docDataEntrada", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_inicio_vigencia', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "docInicioVigencia", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_final_vigencia', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "docFinalVigencia", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_qtd_parcelas', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docQtdParcelas", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_situacao', type: 'char', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docSituacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_renov_numero', type: 'varchar', length: 30 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docRenovNumero", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cia_codigo_renov', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "ciaCodigoRenov", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_anotacoes', type: 'text' }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docAnotacoes", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_comiss_adic', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docComissAdic", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_prop_ult_mov', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docPropUltMov", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_tipo_comiss', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docTipoComiss", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_agencia_debito', type: 'varchar', length: 10 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docAgenciaDebito", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_primeiraavista', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docPrimeiraAVista", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cli_codigo_estipulante', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "cliCodigoEstipulante", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_forma_pagamento', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docFormaPagamento", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cli_codigo_subestipulante', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "cliCodigoSubestipulante", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_renovacao_interna', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docRenovacaoInterna", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_controle', type: 'varchar', length: 30 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docControle", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_bonus_indicacao', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docBonusIndicacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'ciareg_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "ciaRegCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'moeda_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "moedaCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cotac_data', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "cotacData", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_adicional_frac', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docAdicionalFrac", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_custo', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docCusto", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cli_codigo_indicacao', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "cliCodigoIndicacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_iof', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docIof", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_premio_total', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docPremioTotal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_data_envio_proposta', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "docDataEnvioProposta", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_perc_comissao', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docPercComissao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'estrut_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "estrutCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_perc_comissao_extra', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docPercComissaoExtra", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_comissao', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docComissao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'sitren_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "sitrenCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_perc_comissao_total', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docPercComissaoTotal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_data_distrenov', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "docDataDistrenov", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_desc_comissao', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docDescComissao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'rrep_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "rrepCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_mes_base_renovacao', type: 'varchar', length: 7 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docMesBaseRenovacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_conta_debito', type: 'varchar', length: 25 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docContaDebito", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_tipo_apolice', type: 'varchar', length: 2 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docTipoApolice", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_premio_servico_adic', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docPremioServicoAdic", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_endosso2', type: 'varchar', length: 30 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docEndosso2", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_apolice2', type: 'varchar', length: 30 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docApolice2", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_primeira_parcela', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docPrimeiraParcela", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'tpmov_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "tpMovCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'bco_codigo_debito', type: 'int' }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "bcoCodigoDebito", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'aud_inclusao_usr', type: 'varchar', length: 50 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "audInclusaoUsr", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'aud_inclusao_data', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "audInclusaoData", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'aud_alteracao_usr', type: 'varchar', length: 50 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "audAlteracaoUsr", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'aud_alteracao_data', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "audAlteracaoData", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_tipo6', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docTipo6", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_num_proposta6', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docNumProposta6", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_comissao_original', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docComissaoOriginal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'flg_prob_endosso', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "flgProbEndosso", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_codigo_origem', type: 'varchar', length: 60 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docCodigoOrigem", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_identificacao', type: 'varchar', length: 50 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docIdentificacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_intervalo_venc', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docIntervaloVenc", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_arquivo_numero', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docArquivoNumero", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_sigiloso', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docSigiloso", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_premio_liquido_original', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docPremioLiquidoOriginal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_adicional_frac_original', type: 'numeric' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docAdicionalFracOriginal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_livro_numero_susep', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docLivroNumeroSusep", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_livro_pagina_susep', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docLivroPaginaSusep", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_livro_registro_susep', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docLivroRegistroSusep", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cia_codigo_original', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "ciaCodigoOriginal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'pto_codigo_original', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "ptoCodigoOriginal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'ramo_codigo_original', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "ramoCodigoOriginal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'vend_codigos_original', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "vendCodigosOriginal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cco_codigos_original', type: 'varchar', length: 20 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "ccoCodigosOriginal", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'docori_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docoriCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'cn_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "cnCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'clidiv_codigo', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "CliDivCodigo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_data_recusa', type: 'date' }),
    tslib_1.__metadata("design:type", Date)
], EmDoctos.prototype, "docDataRecusa", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'tpmov_codigo_recusa', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "tpmovCodigoRecusa", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_cedente_boleto', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docCedenteBoleto", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_codigo_negociacao', type: 'varchar', length: 50 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docCodigoNegociacao", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_dia_vencimento', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docDiaVencimento", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_comiss_outros_servicos', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docComissOutrosServicos", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_num_prop_renovada', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "docNumPropRenovada", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'doc_geracao_automatica', type: 'varchar', length: 1 }),
    tslib_1.__metadata("design:type", String)
], EmDoctos.prototype, "docGeracaoAutomatica", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'numpedido', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "numPedido", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'numsequencia', type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], EmDoctos.prototype, "numSequencia", void 0);
EmDoctos = EmDoctos_1 = tslib_1.__decorate([
    typeorm_1.Entity('Dados.EmDoctos')
], EmDoctos);
exports.EmDoctos = EmDoctos;
var EmDoctos_1;
//# sourceMappingURL=EmDoctos.js.map