"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const events_1 = require("./events");
const Logger_1 = require("../../app/core/Logger");
const Endosso_1 = require("../../domain/entities/Endosso");
const log = new Logger_1.Logger(__filename);
let EndossoEventSubscriber = class EndossoEventSubscriber {
    onEndossoCreate(endosso) {
        log.info(`Documento ${endosso.docNumProposta} criado!`);
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.endosso.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Endosso_1.Endosso]),
    tslib_1.__metadata("design:returntype", void 0)
], EndossoEventSubscriber.prototype, "onEndossoCreate", null);
EndossoEventSubscriber = tslib_1.__decorate([
    event_dispatch_1.EventSubscriber()
], EndossoEventSubscriber);
exports.EndossoEventSubscriber = EndossoEventSubscriber;
//# sourceMappingURL=EndossoEventSubscriber.js.map