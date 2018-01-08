"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const events_1 = require("../../../domain/subscribers/events");
const class_validator_1 = require("class-validator");
const EventDispatcher_1 = require("../../../app/decorators/EventDispatcher");
const Logger_1 = require("../../../app/decorators/Logger");
const CalculoRepository_1 = require("../../../infra/repositories/CalculoRepository");
const CalculoNotFoundError_1 = require("../../../app/errors/calculo/CalculoNotFoundError");
let CalculoService = class CalculoService {
    constructor(calculoRepository, eventDispatcher, log) {
        this.eventDispatcher = eventDispatcher;
        this.log = log;
        this.calculoRepository = calculoRepository;
    }
    find() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.calculoRepository.find();
        });
    }
    findOne(calcNumero) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const calculo = yield this.calculoRepository.findOne(calcNumero);
            if (!calculo) {
                throw new CalculoNotFoundError_1.CalculoNotFoundError();
            }
            return calculo;
        });
    }
    create(calculo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const erros = yield class_validator_1.validate(calculo);
            console.error(erros);
            if (erros && erros.length > 0) {
                const error = new Error('ValidationError');
                error.details = erros;
                throw erros;
            }
            const novoCalculo = yield this.calculoRepository.save(calculo);
            this.eventDispatcher.dispatch(events_1.events.calculo.created, novoCalculo);
            return novoCalculo;
        });
    }
    update(calcNumero, calculo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info(`Atualizando cálculo ${calcNumero}`);
            const calculoAnterior = yield this.calculoRepository.findOne(calcNumero);
            if (!calculo) {
                throw new CalculoNotFoundError_1.CalculoNotFoundError();
            }
            for (const chave of Object.keys(calculo)) {
                calculoAnterior[chave] = calculo[chave];
            }
            calculoAnterior.calcNumero = calcNumero;
            const erros = yield class_validator_1.validate(calculoAnterior);
            if (erros.length) {
                const error = new Error('ValidationError');
                error.details = erros;
                throw error;
            }
            return this.calculoRepository.save(calculoAnterior);
            // this.log.info(`Atualizando cálculo ${calcNumero}`);
            // calculo.calcNumero = calcNumero;
            // const erros = await validate(calculo);
            // if (erros.length > 0) {
            //   const error: any = new Error('ValidationError');
            //   error.details = erros;
            //   throw error;
            // }
            // return this.calculoRepository.save(calculo);
        });
    }
    delete(calcNumero) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.calculoRepository.delete(calcNumero);
        });
    }
};
CalculoService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typedi_1.Inject(type => CalculoRepository_1.CalculoRepository)),
    tslib_1.__param(1, EventDispatcher_1.EventDispatcher()),
    tslib_1.__param(2, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [CalculoRepository_1.CalculoRepository,
        EventDispatcher_1.EventDispatcherInterface, Object])
], CalculoService);
exports.CalculoService = CalculoService;
//# sourceMappingURL=CalculoService.js.map