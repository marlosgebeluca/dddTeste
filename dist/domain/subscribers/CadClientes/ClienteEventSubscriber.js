"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const events_1 = require("./../events");
const Logger_1 = require("../../../app/core/Logger");
const Cliente_1 = require("../../../domain/entities/cadClientes/Cliente");
const log = new Logger_1.Logger(__filename);
let ClienteEventSubscriber = class ClienteEventSubscriber {
    onClienteCreate(novoCliente) {
        log.info(`Documento ${novoCliente.cliCodigo} criado!`);
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.cliente.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cliente_1.Cliente]),
    tslib_1.__metadata("design:returntype", void 0)
], ClienteEventSubscriber.prototype, "onClienteCreate", null);
ClienteEventSubscriber = tslib_1.__decorate([
    event_dispatch_1.EventSubscriber()
], ClienteEventSubscriber);
exports.ClienteEventSubscriber = ClienteEventSubscriber;
//# sourceMappingURL=ClienteEventSubscriber.js.map