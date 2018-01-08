"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const CnNegociosNotFoundError_1 = require("../../../app/errors/cnNegocios/CnNegociosNotFoundError");
const NegocioService_1 = require("../../../domain/services/cnNegocios/NegocioService");
const Negocio_1 = require("../../../domain/entities/cnNegocios/Negocio");
let NegocioController = class NegocioController {
    constructor(negocioService) {
        this.negocioService = negocioService;
    }
    find(params) {
        return this.negocioService.find(params);
    }
    one(cnCodigo) {
        return this.negocioService.findOne(cnCodigo);
    }
    create(negocio) {
        return this.negocioService.create(negocio);
    }
    update(cnCodigo, negocio) {
        return this.negocioService.update(cnCodigo, negocio);
    }
    delete(cnCodigo) {
        return this.negocioService.delete(cnCodigo);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__param(0, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", Promise)
], NegocioController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:cnCodigo'),
    routing_controllers_1.OnUndefined(CnNegociosNotFoundError_1.CnNegociosNotFoundError),
    tslib_1.__param(0, routing_controllers_1.Param('cnCodigo')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], NegocioController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Negocio_1.Negocio]),
    tslib_1.__metadata("design:returntype", Promise)
], NegocioController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/:cnCodigo'),
    tslib_1.__param(0, routing_controllers_1.Param('cnCodigo')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Negocio_1.Negocio]),
    tslib_1.__metadata("design:returntype", Promise)
], NegocioController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/:cnCodigo'),
    tslib_1.__param(0, routing_controllers_1.Param('cnCodigo')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], NegocioController.prototype, "delete", null);
NegocioController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/negocio'),
    tslib_1.__metadata("design:paramtypes", [NegocioService_1.NegocioService])
], NegocioController);
exports.NegocioController = NegocioController;
//# sourceMappingURL=NegocioController.js.map