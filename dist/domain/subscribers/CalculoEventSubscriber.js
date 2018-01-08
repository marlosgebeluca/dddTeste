"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const events_1 = require("./events");
const Logger_1 = require("../../app/core/Logger");
const Calculo_1 = require("../../domain/entities/calculo/Calculo");
const log = new Logger_1.Logger(__filename);
let CalculoEventSubscriber = class CalculoEventSubscriber {
    onCalculoCreate(novoCalculo) {
        log.info(`Cálculo ${novoCalculo.calcNumero} criado!`);
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.calculo.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Calculo_1.Calculo]),
    tslib_1.__metadata("design:returntype", void 0)
], CalculoEventSubscriber.prototype, "onCalculoCreate", null);
CalculoEventSubscriber = tslib_1.__decorate([
    event_dispatch_1.EventSubscriber()
], CalculoEventSubscriber);
exports.CalculoEventSubscriber = CalculoEventSubscriber;
//# sourceMappingURL=CalculoEventSubscriber.js.map