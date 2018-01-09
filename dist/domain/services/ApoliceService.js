"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const class_validator_1 = require("class-validator");
const events_1 = require("../../domain/subscribers/events");
const EventDispatcher_1 = require("../../app/decorators/EventDispatcher");
const Logger_1 = require("../../app/decorators/Logger");
let ApoliceService = class ApoliceService {
    constructor(apoliceRepository, endossoService, apoliceMapper, eventDispatcher, log) {
        this.eventDispatcher = eventDispatcher;
        this.log = log;
        this.apoliceRepository = apoliceRepository;
        this.endossoService = endossoService;
        this.apoliceMapper = apoliceMapper;
    }
    find(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Buscando todos os apólices');
            return this.apoliceRepository.find(params);
        });
    }
    findOne(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Buscando apólice ${docNumProposta}`);
            return this.apoliceRepository.findOne(docNumProposta);
        });
    }
    create(apolice) {
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
            return this.apoliceRepository.save(novoApolice);
        });
    }
    update(docNumProposta, apolice) {
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
                return this.apoliceRepository.save(apolice);
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
    tslib_1.__param(3, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(4, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, EventDispatcher_1.EventDispatcherInterface, Object])
], ApoliceService);
exports.ApoliceService = ApoliceService;
//# sourceMappingURL=ApoliceService.js.map