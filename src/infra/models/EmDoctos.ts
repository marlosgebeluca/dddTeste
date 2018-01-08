import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('Dados.EmDoctos')
export class EmDoctos implements IEmDoctos {
  @PrimaryGeneratedColumn({ name: 'doc_num_proposta' })
  public docNumProposta: number;

  @Column({ name: 'doc_prop_apolice', type: 'int' })
  public docPropApolice: number;

  @OneToMany(type => EmDoctos, endosso => endosso.docPropApolice)
  public endossos: string[];

  @Column({ name: 'doc_tipo_movto', type: 'char', length: 2 })
  public docTipoMovto: string;

  @Column({ name: 'cli_codigo', type: 'int' })
  public cliCodigo: number;

  @Column({ name: 'cia_codigo', type: 'int' })
  public ciaCodigo: number;

  @Column({ name: 'ramo_codigo', type: 'int' })
  public ramoCodigo: number;

  @Column({ name: 'pto_codigo', type: 'int' })
  public ptoCodigo: number;

  @Column({ name: 'doc_apolice', type: 'varchar', length: 30 })
  public docApolice: string;

  @Column({ name: 'doc_endosso', type: 'varchar', length: 30 })
  public docEndosso: string;

  @Column({ name: 'doc_data_proposta', type: 'date' })
  public docDataProposta: Date;

  @Column({ name: 'doc_data_emissao', type: 'date' })
  public docDataEmissao: Date;

  @Column({ name: 'doc_data_entrada', type: 'date' })
  public docDataEntrada: Date;

  @Column({ name: 'doc_inicio_vigencia', type: 'date' })
  public docInicioVigencia: Date;

  @Column({ name: 'doc_final_vigencia', type: 'date' })
  public docFinalVigencia: Date;

  @Column({ name: 'doc_qtd_parcelas', type: 'int' })
  public docQtdParcelas: number;

  @Column({ name: 'doc_situacao', type: 'char', length: 1 })
  public docSituacao: string;

  @Column({ name: 'doc_renov_numero', type: 'varchar', length: 30 })
  public docRenovNumero: string;

  @Column({ name: 'cia_codigo_renov', type: 'int' })
  public ciaCodigoRenov: number;

  @Column({ name: 'doc_anotacoes', type: 'text' })
  public docAnotacoes: string;

  @Column({ name: 'doc_comiss_adic', type: 'varchar', length: 1 })
  public docComissAdic: string;

  @Column({ name: 'doc_prop_ult_mov', type: 'int' })
  public docPropUltMov: number;

  @Column({ name: 'doc_tipo_comiss', type: 'varchar', length: 1 })
  public docTipoComiss: string;

  @Column({ name: 'doc_agencia_debito', type: 'varchar', length: 10 })
  public docAgenciaDebito: string;

  @Column({ name: 'doc_primeiraavista', type: 'varchar', length: 1 })
  public docPrimeiraAVista: string;

  @Column({ name: 'cli_codigo_estipulante', type: 'int' })
  public cliCodigoEstipulante: number;

  @Column({ name: 'doc_forma_pagamento', type: 'varchar', length: 1 })
  public docFormaPagamento: string;

  @Column({ name: 'cli_codigo_subestipulante', type: 'int' })
  public cliCodigoSubestipulante: number;

  @Column({ name: 'doc_renovacao_interna', type: 'varchar', length: 1 })
  public docRenovacaoInterna: string;

  @Column({ name: 'doc_controle', type: 'varchar', length: 30 })
  public docControle: string;

  @Column({ name: 'doc_bonus_indicacao', type: 'numeric' })
  public docBonusIndicacao: number;

  @Column({ name: 'ciareg_codigo', type: 'int' })
  public ciaRegCodigo: number;

  @Column({ name: 'moeda_codigo', type: 'int' })
  public moedaCodigo: number;

  @Column({ name: 'cotac_data', type: 'date' })
  public cotacData: Date;

  @Column({ name: 'doc_adicional_frac', type: 'numeric' })
  public docAdicionalFrac: number;

  @Column({ name: 'doc_custo', type: 'numeric' })
  public docCusto: number;

  @Column({ name: 'cli_codigo_indicacao', type: 'int' })
  public cliCodigoIndicacao: number;

  @Column({ name: 'doc_iof', type: 'numeric' })
  public docIof: number;

  @Column({ name: 'doc_premio_total', type: 'numeric' })
  public docPremioTotal: number;

  @Column({ name: 'doc_data_envio_proposta', type: 'date' })
  public docDataEnvioProposta: Date;

  @Column({ name: 'doc_perc_comissao', type: 'numeric' })
  public docPercComissao: number;

  @Column({ name: 'estrut_codigo', type: 'int' })
  public estrutCodigo: number;

  @Column({ name: 'doc_perc_comissao_extra', type: 'numeric' })
  public docPercComissaoExtra: number;

  @Column({ name: 'doc_comissao', type: 'numeric' })
  public docComissao: number;

  @Column({ name: 'sitren_codigo', type: 'int' })
  public sitrenCodigo: number;

  @Column({ name: 'doc_perc_comissao_total', type: 'numeric' })
  public docPercComissaoTotal: number;

  @Column({ name: 'doc_data_distrenov', type: 'date' })
  public docDataDistrenov: Date;

  @Column({ name: 'doc_desc_comissao', type: 'numeric' })
  public docDescComissao: number;

  @Column({ name: 'rrep_codigo', type: 'int' })
  public rrepCodigo: number;

  @Column({ name: 'doc_mes_base_renovacao', type: 'varchar', length: 7 })
  public docMesBaseRenovacao: string;

  @Column({ name: 'doc_conta_debito', type: 'varchar', length: 25 })
  public docContaDebito: string;

  @Column({ name: 'doc_tipo_apolice', type: 'varchar', length: 2 })
  public docTipoApolice: string;

  @Column({ name: 'doc_premio_servico_adic', type: 'numeric' })
  public docPremioServicoAdic: number;

  @Column({ name: 'doc_endosso2', type: 'varchar', length: 30 })
  public docEndosso2: string;

  @Column({ name: 'doc_apolice2', type: 'varchar', length: 30 })
  public docApolice2: string;

  @Column({ name: 'doc_primeira_parcela', type: 'int' })
  public docPrimeiraParcela: number;

  @Column({ name: 'tpmov_codigo', type: 'int' })
  public tpMovCodigo: number;

  @Column({ name: 'bco_codigo_debito', type: 'int' })
  public bcoCodigoDebito: string;

  @Column({ name: 'aud_inclusao_usr', type: 'varchar', length: 50 })
  public audInclusaoUsr: string;

  @Column({ name: 'aud_inclusao_data', type: 'date' })
  public audInclusaoData: Date;

  @Column({ name: 'aud_alteracao_usr', type: 'varchar', length: 50 })
  public audAlteracaoUsr: string;

  @Column({ name: 'aud_alteracao_data', type: 'date' })
  public audAlteracaoData: Date;

  @Column({ name: 'doc_tipo6', type: 'varchar', length: 1 })
  public docTipo6: string;

  @Column({ name: 'doc_num_proposta6', type: 'int' })
  public docNumProposta6: number;

  @Column({ name: 'doc_comissao_original', type: 'numeric' })
  public docComissaoOriginal: number;

  @Column({ name: 'flg_prob_endosso', type: 'varchar', length: 1 })
  public flgProbEndosso: string;

  @Column({ name: 'doc_codigo_origem', type: 'varchar', length: 60 })
  public docCodigoOrigem: string;

  @Column({ name: 'doc_identificacao', type: 'varchar', length: 50 })
  public docIdentificacao: string;

  @Column({ name: 'doc_intervalo_venc', type: 'int' })
  public docIntervaloVenc: number;

  @Column({ name: 'doc_arquivo_numero', type: 'varchar', length: 20 })
  public docArquivoNumero: string;

  @Column({ name: 'doc_sigiloso', type: 'varchar', length: 1 })
  public docSigiloso: string;

  @Column({ name: 'doc_premio_liquido_original', type: 'numeric' })
  public docPremioLiquidoOriginal: number;

  @Column({ name: 'doc_adicional_frac_original', type: 'numeric' })
  public docAdicionalFracOriginal: number;

  @Column({ name: 'doc_livro_numero_susep', type: 'int' })
  public docLivroNumeroSusep: number;

  @Column({ name: 'doc_livro_pagina_susep', type: 'int' })
  public docLivroPaginaSusep: number;

  @Column({ name: 'doc_livro_registro_susep', type: 'int' })
  public docLivroRegistroSusep: number;

  @Column({ name: 'cia_codigo_original', type: 'int' })
  public ciaCodigoOriginal: number;

  @Column({ name: 'pto_codigo_original', type: 'int' })
  public ptoCodigoOriginal: number;

  @Column({ name: 'ramo_codigo_original', type: 'int' })
  public ramoCodigoOriginal: number;

  @Column({ name: 'vend_codigos_original', type: 'varchar', length: 20 })
  public vendCodigosOriginal: string;

  @Column({ name: 'cco_codigos_original', type: 'varchar', length: 20 })
  public ccoCodigosOriginal: string;

  @Column({ name: 'docori_codigo', type: 'int' })
  public docoriCodigo: number;

  @Column({ name: 'cn_codigo', type: 'int' })
  public cnCodigo: number;

  @Column({ name: 'clidiv_codigo', type: 'int' })
  public CliDivCodigo: number;

  @Column({ name: 'doc_data_recusa', type: 'date' })
  public docDataRecusa: Date;

  @Column({ name: 'tpmov_codigo_recusa', type: 'int' })
  public tpmovCodigoRecusa: number;

  @Column({ name: 'doc_cedente_boleto', type: 'int' })
  public docCedenteBoleto: number;

  @Column({ name: 'doc_codigo_negociacao', type: 'varchar', length: 50 })
  public docCodigoNegociacao: string;

  @Column({ name: 'doc_dia_vencimento', type: 'int' })
  public docDiaVencimento: number;

  @Column({ name: 'doc_comiss_outros_servicos', type: 'varchar', length: 1 })
  public docComissOutrosServicos: string;

  @Column({ name: 'doc_num_prop_renovada', type: 'int' })
  public docNumPropRenovada: number;

  @Column({ name: 'doc_geracao_automatica', type: 'varchar', length: 1 })
  public docGeracaoAutomatica: string;

  @Column({ name: 'numpedido', type: 'int' })
  public numPedido: number;

  @Column({ name: 'numsequencia', type: 'int' })
  public numSequencia: number;

}
