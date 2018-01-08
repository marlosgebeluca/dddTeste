"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const events_1 = require("../../../domain/subscribers/events");
const class_validator_1 = require("class-validator");
const EventDispatcher_1 = require("../../../app/decorators/EventDispatcher");
const Logger_1 = require("../../../app/decorators/Logger");
const CadClientesRepository_1 = require("../../../infra/repositories/CadClientesRepository");
let ClienteService = class ClienteService {
    constructor(cadClientesRepository, eventDispatcher, log) {
        this.eventDispatcher = eventDispatcher;
        this.log = log;
        this.cadClientesRepository = cadClientesRepository;
    }
    find(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Buscando todos os clientes');
            return this.cadClientesRepository.find(params);
        });
    }
    findOne(cliCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Buscando cliente ${cliCodigo}`);
            return this.cadClientesRepository.findOne(cliCodigo);
        });
    }
    create(cadClientes) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Criando novo cliente');
            const erros = yield class_validator_1.validate(cadClientes);
            console.error(erros);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.details = erros;
                throw erros;
            }
            const novoApolice = yield this.cadClientesRepository.save(cadClientes);
            this.eventDispatcher.dispatch(events_1.events.calculo.created, novoApolice);
            return novoApolice;
        });
    }
    update(cliCodigo, cadClientes) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Atualizando cliente ${cliCodigo}`);
            cadClientes.cliCodigo = cliCodigo;
            const erros = yield class_validator_1.validate(cadClientes);
            if (erros.length > 0) {
                const error = new Error('ValidationError');
                error.details = erros;
                throw error;
            }
            return this.cadClientesRepository.save(cadClientes);
        });
    }
    delete(cliCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Excluindo cliente ${cliCodigo}`);
            return this.cadClientesRepository.delete(cliCodigo);
        });
    }
};
ClienteService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typedi_1.Inject(type => CadClientesRepository_1.CadClientesRepository)),
    tslib_1.__param(1, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(2, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [CadClientesRepository_1.CadClientesRepository,
        EventDispatcher_1.EventDispatcherInterface, Object])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=ClienteService.js.map