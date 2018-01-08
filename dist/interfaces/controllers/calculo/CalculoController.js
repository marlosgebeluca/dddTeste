"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import { JsonController, Get, Post, Put, Param, Delete, Body, OnUndefined, Authorized } from 'routing-controllers';
const routing_controllers_1 = require("routing-controllers");
const CalculoNotFoundError_1 = require("../../../app/errors/CalculoNotFoundError");
const CalculoService_1 = require("../../../domain/services/calculo/CalculoService");
const Calculo_1 = require("../../../domain/entities/calculo/Calculo");
// @Authorized()
let CalculoController = class CalculoController {
    constructor(calculoService) {
        this.calculoService = calculoService;
    }
    find() {
        return this.calculoService.find();
    }
    one(calcNumero) {
        return this.calculoService.findOne(calcNumero);
    }
    create(calculo) {
        return this.calculoService.create(calculo);
    }
    update(calcNumero, calculo) {
        return this.calculoService.update(calcNumero, calculo);
    }
    delete(calcNumero) {
        return this.calculoService.delete(calcNumero);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CalculoController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:calcNumero'),
    routing_controllers_1.OnUndefined(CalculoNotFoundError_1.CalculoNotFoundError),
    tslib_1.__param(0, routing_controllers_1.Param('calcNumero')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CalculoController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Calculo_1.Calculo]),
    tslib_1.__metadata("design:returntype", Promise)
], CalculoController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/:calcNumero'),
    tslib_1.__param(0, routing_controllers_1.Param('calcNumero')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Calculo_1.Calculo]),
    tslib_1.__metadata("design:returntype", Promise)
], CalculoController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/:calcNumero'),
    tslib_1.__param(0, routing_controllers_1.Param('calcNumero')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CalculoController.prototype, "delete", null);
CalculoController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/calculos'),
    tslib_1.__metadata("design:paramtypes", [CalculoService_1.CalculoService])
], CalculoController);
exports.CalculoController = CalculoController;
//# sourceMappingURL=CalculoController.js.map