"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const events_1 = require("../../../domain/subscribers/events");
const class_validator_1 = require("class-validator");
const EventDispatcher_1 = require("../../../app/decorators/EventDispatcher");
const Logger_1 = require("../../../app/decorators/Logger");
const CadTelefonesRepository_1 = require("../../../infra/repositories/CadTelefonesRepository");
let TelefoneService = class TelefoneService {
    constructor(cadTelefonesRepository, eventDispatcher, log) {
        this.eventDispatcher = eventDispatcher;
        this.log = log;
        this.cadTelefonesRepository = cadTelefonesRepository;
    }
    find(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Buscando todos os telefones');
            return this.cadTelefonesRepository.find(params);
        });
    }
    findOne(foneCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Buscando telefone ${foneCodigo}`);
            return this.cadTelefonesRepository.findOne(foneCodigo);
        });
    }
    create(cadTelefones) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Criando novo telefone');
            const erros = yield class_validator_1.validate(cadTelefones);
            console.error(erros);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.details = erros;
                throw erros;
            }
            const novoApolice = yield this.cadTelefonesRepository.save(cadTelefones);
            this.eventDispatcher.dispatch(events_1.events.calculo.created, novoApolice);
            return novoApolice;
        });
    }
    update(foneCodigo, cadTelefones) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Atualizando telefone ${foneCodigo}`);
            cadTelefones.foneCodigo = foneCodigo;
            const erros = yield class_validator_1.validate(cadTelefones);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.details = erros;
                throw error;
            }
            return this.cadTelefonesRepository.save(cadTelefones);
        });
    }
    delete(foneCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Excluindo telefone ${foneCodigo}`);
            return this.cadTelefonesRepository.delete(foneCodigo);
        });
    }
};
TelefoneService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typedi_1.Inject(type => CadTelefonesRepository_1.CadTelefonesRepository)),
    tslib_1.__param(1, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(2, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [CadTelefonesRepository_1.CadTelefonesRepository,
        EventDispatcher_1.EventDispatcherInterface, Object])
], TelefoneService);
exports.TelefoneService = TelefoneService;
//# sourceMappingURL=TelefoneService.js.map