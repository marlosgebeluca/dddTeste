"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const events_1 = require("./events");
const Logger_1 = require("../../app/core/Logger");
const Apolice_1 = require("../../domain/entities/Apolice");
const typedi_1 = require("typedi");
const log = new Logger_1.Logger(__filename);
let ApoliceEventSubscriber = class ApoliceEventSubscriber {
    onApoliceCreate(apolice) {
        log.info(`Apólice ${apolice.docNumProposta} não encontrada!`);
    }
    onApoliceNotFound(docNumProposta) {
        log.info(`Apólice ${docNumProposta} não encontrada!`);
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.apolice.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Apolice_1.Apolice]),
    tslib_1.__metadata("design:returntype", void 0)
], ApoliceEventSubscriber.prototype, "onApoliceCreate", null);
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.apolice.notFound),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], ApoliceEventSubscriber.prototype, "onApoliceNotFound", null);
ApoliceEventSubscriber = tslib_1.__decorate([
    typedi_1.Service('apolice.subscriber'),
    event_dispatch_1.EventSubscriber()
], ApoliceEventSubscriber);
exports.ApoliceEventSubscriber = ApoliceEventSubscriber;
//# sourceMappingURL=ApoliceEventSubscriber.js.map