"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const class_validator_1 = require("class-validator");
const events_1 = require("../../domain/subscribers/events");
const EventDispatcher_1 = require("../../app/decorators/EventDispatcher");
const Logger_1 = require("../../app/decorators/Logger");
const GerarJsonService_1 = require("./GerarJsonService");
let ApoliceService = class ApoliceService {
    constructor(apoliceRepository, endossoService, apoliceMapper, jsonService, eventDispatcher, log) {
        this.eventDispatcher = eventDispatcher;
        this.log = log;
        this.apoliceRepository = apoliceRepository;
        this.endossoService = endossoService;
        this.apoliceMapper = apoliceMapper;
        this.jsonService = jsonService;
    }
    find(params, gerarJson) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Buscando todos os apólices');
            const apolices = yield this.apoliceRepository.find(params);
            if (gerarJson) {
                this.log.info('Gerando Json Apolice');
                for (const key of Object.keys(apolices)) {
                    const apolice = apolices[key];
                    apolices[key] = yield this.jsonService.gerar(apolice, true);
                }
            }
            // Bom dia Almir, sobre a pesquisa do typescript,
            // o exemplo que o Marco solicitou que era colocar os decorators personalizados e gerar um Json de retorno está concluído para os métodos
            return apolices;
        });
    }
    findOne(docNumProposta, gerarJson) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Buscando apólice ${docNumProposta}`);
            let apolice = yield this.apoliceRepository.findOne(docNumProposta);
            if (gerarJson) {
                this.log.info('Gerando Json Apolice');
                apolice = yield this.jsonService.gerar(apolice);
            }
            return apolice;
        });
    }
    create(apolice, gerarJson) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Criando novo apólice');
            apolice = this.apoliceMapper.toClass(apolice);
            const erros = yield class_validator_1.validate(apolice);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.errors = erros;
                throw error;
            }
            const novoApolice = yield this.apoliceRepository.save(apolice);
            novoApolice.docPropApolice = novoApolice.docNumProposta;
            this.eventDispatcher.dispatch(events_1.events.apolice.created, novoApolice);
            apolice = yield this.apoliceRepository.save(novoApolice);
            if (gerarJson) {
                this.log.info('Gerando Json Apolice');
                apolice = yield this.jsonService.gerar(apolice);
            }
            return apolice;
        });
    }
    update(docNumProposta, apolice, gerarJson) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Atualizando apólice ${docNumProposta}`);
            apolice.docNumProposta = docNumProposta;
            apolice = this.apoliceMapper.toClass(apolice);
            const erros = yield class_validator_1.validate(apolice);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.errors = erros;
                throw error;
            }
            const apoliceAux = yield this.apoliceRepository.findOne(docNumProposta);
            if (apoliceAux.docNumProposta === apolice.docNumProposta) {
                apolice = yield this.apoliceRepository.save(apolice);
                if (gerarJson) {
                    this.log.info('Gerando Json Apolice');
                    apolice = yield this.jsonService.gerar(apolice);
                }
                return apolice;
            }
            else {
                throw new Error('NOT_FOUND');
            }
        });
    }
    delete(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Excluindo apólice ${docNumProposta}`);
            return this.apoliceRepository.delete(docNumProposta);
        });
    }
    /**
     * Renovar apólice
     */
    renovarApolice(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Renovar Apólice');
            // Buscando documento
            const apolice = yield this.apoliceRepository.findOne(docNumProposta);
            // Valida Campos alterados ao gerar uma nova apólice
            const dataAux = new Date();
            const inicioVigencia = dataAux.getFullYear() + '-' + (dataAux.getMonth() + 1) + '-' + dataAux.getDay();
            const fimVigencia = (dataAux.getFullYear() + 1) + '-' + (dataAux.getMonth() + 1) + '-' + dataAux.getDay();
            apolice.docInicioVigencia = inicioVigencia;
            apolice.docFinalVigencia = fimVigencia;
            apolice.docNumPropRenovada = apolice.docNumProposta;
            apolice.docRenovNumero = apolice.docApolice;
            apolice.docTipoComiss = +apolice.docTipoComiss;
            // Remove o numero da apólice antiga
            delete apolice.docNumProposta;
            // Valida a entidade
            const erros = yield class_validator_1.validate(apolice);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.errors = erros;
                throw error;
            }
            // Insere nova apolice
            const novoApolice = yield this.apoliceRepository.save(apolice);
            novoApolice.docPropApolice = novoApolice.docNumProposta;
            this.eventDispatcher.dispatch(events_1.events.apolice.created, novoApolice);
            return novoApolice;
        });
    }
    gerarEndosso(docNumProposta, endosso) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Gerar Endosso');
            endosso.docPropApolice = docNumProposta;
            return this.endossoService.create(endosso);
        });
    }
    findEndossos(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Buscando todos os endossos da apolice ${docNumProposta}`);
            return this.apoliceRepository.findEndossos(docNumProposta);
        });
    }
};
ApoliceService = tslib_1.__decorate([
    typedi_1.Service('apolice.service'),
    tslib_1.__param(0, typedi_1.Inject('apolice.repository')),
    tslib_1.__param(1, typedi_1.Inject('endosso.service')),
    tslib_1.__param(2, typedi_1.Inject('apolice.mapper')),
    tslib_1.__param(3, typedi_1.Inject('gerarJson.service')),
    tslib_1.__param(4, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(5, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, GerarJsonService_1.GerarJsonService,
        EventDispatcher_1.EventDispatcherInterface, Object])
], ApoliceService);
exports.ApoliceService = ApoliceService;
//# sourceMappingURL=ApoliceService.js.map