"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const class_validator_1 = require("class-validator");
const events_1 = require("../../domain/subscribers/events");
const EventDispatcher_1 = require("../../app/decorators/EventDispatcher");
const Logger_1 = require("../../app/decorators/Logger");
let EndossoService = class EndossoService {
    constructor(endossoRepository, endossoMapper, eventDispatcher, log) {
        this.eventDispatcher = eventDispatcher;
        this.log = log;
        this.endossoRepository = endossoRepository;
        this.endossoMapper = endossoMapper;
    }
    find(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Buscando todos os endossos');
            return this.endossoRepository.find(params);
        });
    }
    findOne(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Buscando endosso ${docNumProposta}`);
            return this.endossoRepository.findOne(docNumProposta);
        });
    }
    create(endosso) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Criando novo endosso');
            endosso = this.endossoMapper.toClass(endosso);
            const erros = yield class_validator_1.validate(endosso);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.errors = erros;
                throw error;
            }
            const novoEndosso = yield this.endossoRepository.save(endosso);
            this.eventDispatcher.dispatch(events_1.events.endosso.created, novoEndosso);
            return novoEndosso;
        });
    }
    update(docNumProposta, endosso) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Atualizando endosso ${docNumProposta}`);
            endosso.docNumProposta = docNumProposta;
            endosso = this.endossoMapper.toClass(endosso);
            const erros = yield class_validator_1.validate(endosso);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.details = erros;
                throw error;
            }
            const endossoAux = yield this.endossoRepository.findOne(docNumProposta);
            if (endossoAux.docNumProposta === endosso.docNumProposta) {
                return this.endossoRepository.save(endosso);
            }
            else {
                throw Error('NOT_FOUND');
            }
        });
    }
    delete(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Excluindo endosso ${docNumProposta}`);
            return this.endossoRepository.delete(docNumProposta);
        });
    }
};
EndossoService = tslib_1.__decorate([
    typedi_1.Service('endosso.service'),
    tslib_1.__param(0, typedi_1.Inject('endosso.repository')),
    tslib_1.__param(1, typedi_1.Inject('endosso.mapper')),
    tslib_1.__param(2, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(3, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, EventDispatcher_1.EventDispatcherInterface, Object])
], EndossoService);
exports.EndossoService = EndossoService;
//# sourceMappingURL=EndossoService.js.map