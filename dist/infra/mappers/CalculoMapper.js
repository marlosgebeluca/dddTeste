"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalculoDTO = require("../../domain/entities/calculo/Calculo");
const Calculo_1 = require("../../infra/models/calculo/Calculo");
const RenovacaoDTO = require("../../domain/entities/calculo/Renovacao");
const SeguradoDTO = require("../../domain/entities/calculo/Segurado");
const ProprietarioDTO = require("../../domain/entities/calculo/Proprietario");
const VeiculoDTO = require("../../domain/entities/calculo/Veiculo");
const CondutorDTO = require("../../domain/entities/calculo/Condutor");
const CalculoSeguradoraDTO = require("../../domain/entities/calculo/CalculoSeguradora");
exports.CalculoMapper = {
    toEntity(calculo) {
        const novoCalculo = new CalculoDTO.Calculo();
        const { calcNumero, tipo, vigencia, condutorIndeterminado, renovSeguradoraAnterior, renovVigenciaAnterior, renovApoliceAnterior, segTipoPessoa, segCpfCnpj, segNome, segSexo, segEmail, segTelefone, propTipoPessoa, propCpfCnpj, propNome, propSexo, propNascimento, propVinculoSegurado, veicFipe, veicAnoModelo, veicMarca, veicModelo, veicPlaca, veicChassi, veicCombustivel, veicZeroKm, veicLotacao, condutores, seguradoras, } = calculo;
        novoCalculo.calcNumero = calcNumero;
        novoCalculo.tipo = tipo;
        novoCalculo.vigencia = new Date(vigencia);
        novoCalculo.condutorIndeterminado = condutorIndeterminado && condutorIndeterminado === 'S' ? true : false;
        if (renovVigenciaAnterior || renovApoliceAnterior || renovSeguradoraAnterior) {
            novoCalculo.renovacao = new RenovacaoDTO.Renovacao();
            novoCalculo.renovacao.apoliceAnterior = renovApoliceAnterior;
            novoCalculo.renovacao.seguradoraAnterior = renovSeguradoraAnterior;
            novoCalculo.renovacao.vigenciaAnterior = new Date(renovVigenciaAnterior);
        }
        novoCalculo.segurado = new SeguradoDTO.Segurado();
        novoCalculo.segurado.cpfCnpj = segCpfCnpj;
        novoCalculo.segurado.email = segEmail;
        novoCalculo.segurado.nome = segNome;
        novoCalculo.segurado.sexo = segSexo;
        novoCalculo.segurado.telefone = segTelefone;
        novoCalculo.segurado.tipoPessoa = segTipoPessoa;
        novoCalculo.proprietario = new ProprietarioDTO.Proprietario();
        novoCalculo.proprietario.cpfCnpj = propCpfCnpj;
        novoCalculo.proprietario.nascimento = new Date(propNascimento);
        novoCalculo.proprietario.nome = propNome;
        novoCalculo.proprietario.sexo = propSexo;
        novoCalculo.proprietario.tipoPessoa = propTipoPessoa;
        novoCalculo.proprietario.vinculoSegurado = propVinculoSegurado;
        novoCalculo.veiculo = new VeiculoDTO.Veiculo();
        novoCalculo.veiculo.anoModelo = veicAnoModelo;
        novoCalculo.veiculo.chassi = veicChassi;
        novoCalculo.veiculo.combustivel = veicCombustivel;
        novoCalculo.veiculo.fipe = veicFipe;
        novoCalculo.veiculo.lotacao = veicLotacao;
        novoCalculo.veiculo.marca = veicMarca;
        novoCalculo.veiculo.modelo = veicModelo;
        novoCalculo.veiculo.placa = veicPlaca;
        novoCalculo.veiculo.zeroKm = veicZeroKm && veicZeroKm === 'S' ? true : false;
        if (condutores && condutores.length) {
            novoCalculo.condutores = condutores.map(condutor => {
                const novoCondutor = new CondutorDTO.Condutor();
                novoCondutor.condutorPrincipal = condutor['condutorPrincipal'] && condutor['condutorPrincipal'] === 'S' ? true : false;
                novoCondutor.cpfCnpj = condutor['cpfCnpj'];
                novoCondutor.nascimento = new Date(condutor['nascimento']);
                novoCondutor.nome = condutor['nome'];
                novoCondutor.relacaoSegurado = condutor['relacaoSegurado'];
                novoCondutor.sexo = condutor['sexo'];
                return novoCondutor;
            });
        }
        if (seguradoras && seguradoras.length) {
            novoCalculo.seguradoras = seguradoras.map(seguradora => {
                const novaSeguradora = new CalculoSeguradoraDTO.CalculoSeguradora();
                novaSeguradora.assistencia = seguradora['assistencia'];
                novaSeguradora.calcula = seguradora['calcula'] && seguradora['calcula'] === 'S' ? true : false;
                novaSeguradora.carroReserva = seguradora['carroReserva'];
                novaSeguradora.percComissao = seguradora['percComissao'];
                novaSeguradora.seguradora = seguradora['seguradora'];
                novaSeguradora.vidros = seguradora['vidros'];
                return novaSeguradora;
            });
        }
        return novoCalculo;
    },
    toDatabase(entidade) {
        const novoCalculo = new Calculo_1.Calculo();
        for (const chave in entidade) {
            if (!entidade.hasOwnProperty(chave)) {
                continue;
            }
            novoCalculo[chave] = entidade[chave];
        }
        novoCalculo['condutorIndeterminado'] = novoCalculo['condutorIndeterminado'] ? 'S' : 'N';
        // proprietarios
        if (novoCalculo['proprietario']) {
            novoCalculo.propCpfCnpj = novoCalculo['proprietario'].cpfCnpj;
            novoCalculo.propNascimento = novoCalculo['proprietario'].nascimento;
            novoCalculo.propNome = novoCalculo['proprietario'].nome;
            novoCalculo.propSexo = novoCalculo['proprietario'].sexo;
            novoCalculo.propTipoPessoa = novoCalculo['proprietario'].tipoPessoa;
            novoCalculo.propVinculoSegurado = novoCalculo['proprietario'].vinculoSegurado;
            delete novoCalculo['proprietario'];
        }
        // segurado
        if (novoCalculo['segurado']) {
            novoCalculo.segCpfCnpj = novoCalculo['segurado'].cpfCnpj;
            novoCalculo.segEmail = novoCalculo['segurado'].email;
            novoCalculo.segNome = novoCalculo['segurado'].nome;
            novoCalculo.segSexo = novoCalculo['segurado'].sexo;
            novoCalculo.segTelefone = novoCalculo['segurado'].telefone;
            novoCalculo.segTipoPessoa = novoCalculo['segurado'].tipoPessoa;
            delete novoCalculo['segurado'];
        }
        // veiculo
        if (novoCalculo['veiculo']) {
            novoCalculo.veicAnoModelo = novoCalculo['veiculo'].anoModelo;
            novoCalculo.veicChassi = novoCalculo['veiculo'].chassi;
            novoCalculo.veicCombustivel = novoCalculo['veiculo'].combustivel;
            novoCalculo.veicFipe = novoCalculo['veiculo'].fipe;
            novoCalculo.veicLotacao = novoCalculo['veiculo'].lotacao;
            novoCalculo.veicMarca = novoCalculo['veiculo'].marca;
            novoCalculo.veicModelo = novoCalculo['veiculo'].modelo;
            novoCalculo.veicPlaca = novoCalculo['veiculo'].placa;
            novoCalculo.veicZeroKm = novoCalculo['veiculo'].zeroKm ? 'S' : 'N';
            delete novoCalculo['veiculo'];
        }
        // seguradoras
        if (novoCalculo['seguradoras']) {
            for (const i in novoCalculo['seguradoras']) {
                if (novoCalculo['seguradoras'].hasOwnProperty(i)) {
                    novoCalculo['seguradoras'][i].calcula = novoCalculo['seguradoras'][i].calcula ? 'S' : 'N';
                }
            }
        }
        return novoCalculo;
    },
};
//# sourceMappingURL=CalculoMapper.js.map