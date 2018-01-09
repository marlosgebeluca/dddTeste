"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const ApoliceMiddleware_1 = require("../../app/middlewares/ApoliceMiddleware");
let ApoliceController = class ApoliceController {
    constructor(apoliceService) {
        this.apoliceService = apoliceService;
    }
    find(params) {
        return this.apoliceService.find(params);
    }
    one(docNumProposta) {
        return this.apoliceService.findOne(docNumProposta);
    }
    create(apolice) {
        return this.apoliceService.create(apolice);
    }
    update(docNumProposta, apolice) {
        return this.apoliceService.update(docNumProposta, apolice);
    }
    delete(docNumProposta) {
        return this.apoliceService.delete(docNumProposta);
    }
    renovarApolice(docNumProposta) {
        return this.apoliceService.renovarApolice(docNumProposta);
    }
    gerarEndosso(docNumProposta, endosso) {
        return this.apoliceService.gerarEndosso(docNumProposta, endosso);
    }
    findEndossos(docNumProposta) {
        return this.apoliceService.findEndossos(docNumProposta);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__param(0, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApoliceController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:docNumProposta'),
    tslib_1.__param(0, routing_controllers_1.Param('docNumProposta')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ApoliceController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApoliceController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/:docNumProposta'),
    tslib_1.__param(0, routing_controllers_1.Param('docNumProposta')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApoliceController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/:docNumProposta'),
    tslib_1.__param(0, routing_controllers_1.Param('docNumProposta')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ApoliceController.prototype, "delete", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/renovar/:docNumProposta'),
    tslib_1.__param(0, routing_controllers_1.Param('docNumProposta')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ApoliceController.prototype, "renovarApolice", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/gerarEndosso/:docNumProposta'),
    tslib_1.__param(0, routing_controllers_1.Param('docNumProposta')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApoliceController.prototype, "gerarEndosso", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:docNumProposta/endossos'),
    tslib_1.__param(0, routing_controllers_1.Param('docNumProposta')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ApoliceController.prototype, "findEndossos", null);
ApoliceController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/apolice'),
    routing_controllers_1.UseAfter(ApoliceMiddleware_1.ApoliceMiddleware),
    tslib_1.__param(0, typedi_1.Inject('apolice.service')),
    tslib_1.__metadata("design:paramtypes", [Object])
], ApoliceController);
exports.ApoliceController = ApoliceController;
//# sourceMappingURL=ApoliceController.js.map