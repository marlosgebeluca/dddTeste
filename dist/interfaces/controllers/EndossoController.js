"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const EndossoMiddleware_1 = require("../../app/middlewares/EndossoMiddleware");
let EndossoController = class EndossoController {
    constructor(endossoService) {
        this.endossoService = endossoService;
    }
    find(params) {
        return this.endossoService.find(params);
    }
    one(docNumProposta) {
        return this.endossoService.findOne(docNumProposta);
    }
    create(endosso) {
        return this.endossoService.create(endosso);
    }
    update(docNumProposta, endosso) {
        return this.endossoService.update(docNumProposta, endosso);
    }
    delete(docNumProposta) {
        return this.endossoService.delete(docNumProposta);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__param(0, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", Promise)
], EndossoController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:docNumProposta'),
    tslib_1.__param(0, routing_controllers_1.Param('docNumProposta')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EndossoController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EndossoController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/:docNumProposta'),
    tslib_1.__param(0, routing_controllers_1.Param('docNumProposta')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EndossoController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/:docNumProposta'),
    tslib_1.__param(0, routing_controllers_1.Param('docNumProposta')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EndossoController.prototype, "delete", null);
EndossoController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/endosso'),
    routing_controllers_1.UseAfter(EndossoMiddleware_1.EndossoMiddleware),
    tslib_1.__param(0, typedi_1.Inject('endosso.service')),
    tslib_1.__metadata("design:paramtypes", [Object])
], EndossoController);
exports.EndossoController = EndossoController;
//# sourceMappingURL=EndossoController.js.map