"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const events_1 = require("./../events");
const Logger_1 = require("../../../app/core/Logger");
const Negocio_1 = require("../../../domain/entities/cnNegocios/Negocio");
const log = new Logger_1.Logger(__filename);
let NegocioEventSubscriber = class NegocioEventSubscriber {
    onNegocioCreate(novoNegocio) {
        log.info(`Documento ${novoNegocio.cnCodigo} criado!`);
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.negocio.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Negocio_1.Negocio]),
    tslib_1.__metadata("design:returntype", void 0)
], NegocioEventSubscriber.prototype, "onNegocioCreate", null);
NegocioEventSubscriber = tslib_1.__decorate([
    event_dispatch_1.EventSubscriber()
], NegocioEventSubscriber);
exports.NegocioEventSubscriber = NegocioEventSubscriber;
//# sourceMappingURL=NegocioEventSubscriber.js.map