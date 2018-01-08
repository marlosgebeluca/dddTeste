"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const events_1 = require("./../events");
const Logger_1 = require("../../../app/core/Logger");
const Telefone_1 = require("../../../domain/entities/cadTelefones/Telefone");
const log = new Logger_1.Logger(__filename);
let TelefoneEventSubscriber = class TelefoneEventSubscriber {
    onTelefoneCreate(novoTelefone) {
        log.info(`Documento ${novoTelefone.foneCodigo} criado!`);
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.telefone.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Telefone_1.Telefone]),
    tslib_1.__metadata("design:returntype", void 0)
], TelefoneEventSubscriber.prototype, "onTelefoneCreate", null);
TelefoneEventSubscriber = tslib_1.__decorate([
    event_dispatch_1.EventSubscriber()
], TelefoneEventSubscriber);
exports.TelefoneEventSubscriber = TelefoneEventSubscriber;
//# sourceMappingURL=TelefoneEventSubscriber.js.map