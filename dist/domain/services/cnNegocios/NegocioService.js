"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const events_1 = require("../../../domain/subscribers/events");
const class_validator_1 = require("class-validator");
const EventDispatcher_1 = require("../../../app/decorators/EventDispatcher");
const Logger_1 = require("../../../app/decorators/Logger");
const CnNegociosRepository_1 = require("../../../infra/repositories/CnNegociosRepository");
let NegocioService = class NegocioService {
    constructor(cnNegociosRepository, eventDispatcher, log) {
        this.eventDispatcher = eventDispatcher;
        this.log = log;
        this.cnNegociosRepository = cnNegociosRepository;
    }
    find(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Buscando todos os negócios');
            return this.cnNegociosRepository.find(params);
        });
    }
    findOne(cnCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Buscando negócio ${cnCodigo}`);
            return this.cnNegociosRepository.findOne(cnCodigo);
        });
    }
    create(cnNegocios) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Criando novo negócio');
            const erros = yield class_validator_1.validate(cnNegocios);
            console.error(erros);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.details = erros;
                throw erros;
            }
            const novoApolice = yield this.cnNegociosRepository.save(cnNegocios);
            this.eventDispatcher.dispatch(events_1.events.calculo.created, novoApolice);
            return novoApolice;
        });
    }
    update(cnCodigo, cnNegocios) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Atualizando negócio ${cnCodigo}`);
            cnNegocios.cnCodigo = cnCodigo;
            const erros = yield class_validator_1.validate(cnNegocios);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.details = erros;
                throw error;
            }
            return this.cnNegociosRepository.save(cnNegocios);
        });
    }
    delete(cnCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Excluindo negócio ${cnCodigo}`);
            return this.cnNegociosRepository.delete(cnCodigo);
        });
    }
};
NegocioService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typedi_1.Inject(type => CnNegociosRepository_1.CnNegociosRepository)),
    tslib_1.__param(1, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(2, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [CnNegociosRepository_1.CnNegociosRepository,
        EventDispatcher_1.EventDispatcherInterface, Object])
], NegocioService);
exports.NegocioService = NegocioService;
//# sourceMappingURL=NegocioService.js.map