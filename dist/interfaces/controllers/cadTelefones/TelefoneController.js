"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const CadTelefonesNotFoundError_1 = require("../../../app/errors/cadTelefones/CadTelefonesNotFoundError");
const TelefoneService_1 = require("../../../domain/services/cadTelefones/TelefoneService");
const Telefone_1 = require("../../../domain/entities/cadTelefones/Telefone");
let TelefoneController = class TelefoneController {
    constructor(telefoneService) {
        this.telefoneService = telefoneService;
    }
    find(params) {
        return this.telefoneService.find(params);
    }
    one(foneCodigo) {
        return this.telefoneService.findOne(foneCodigo);
    }
    create(telefone) {
        return this.telefoneService.create(telefone);
    }
    update(foneCodigo, telefone) {
        return this.telefoneService.update(foneCodigo, telefone);
    }
    delete(foneCodigo) {
        return this.telefoneService.delete(foneCodigo);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__param(0, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", Promise)
], TelefoneController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:foneCodigo'),
    routing_controllers_1.OnUndefined(CadTelefonesNotFoundError_1.CadTelefonesNotFoundError),
    tslib_1.__param(0, routing_controllers_1.Param('foneCodigo')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TelefoneController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Telefone_1.Telefone]),
    tslib_1.__metadata("design:returntype", Promise)
], TelefoneController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/:foneCodigo'),
    tslib_1.__param(0, routing_controllers_1.Param('foneCodigo')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Telefone_1.Telefone]),
    tslib_1.__metadata("design:returntype", Promise)
], TelefoneController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/:foneCodigo'),
    tslib_1.__param(0, routing_controllers_1.Param('foneCodigo')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], TelefoneController.prototype, "delete", null);
TelefoneController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/telefone'),
    tslib_1.__metadata("design:paramtypes", [TelefoneService_1.TelefoneService])
], TelefoneController);
exports.TelefoneController = TelefoneController;
//# sourceMappingURL=TelefoneController.js.map