"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const CadClientesNotFoundError_1 = require("../../../app/errors/cadClientes/CadClientesNotFoundError");
const ClienteService_1 = require("../../../domain/services/cadClientes/ClienteService");
const Cliente_1 = require("../../../domain/entities/cadClientes/Cliente");
let ClienteController = class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    find(params) {
        return this.clienteService.find(params);
    }
    one(cliCodigo) {
        return this.clienteService.findOne(cliCodigo);
    }
    create(cliente) {
        return this.clienteService.create(cliente);
    }
    update(cliCodigo, cliente) {
        return this.clienteService.update(cliCodigo, cliente);
    }
    delete(cliCodigo) {
        return this.clienteService.delete(cliCodigo);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    tslib_1.__param(0, routing_controllers_1.QueryParams()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:cliCodigo'),
    routing_controllers_1.OnUndefined(CadClientesNotFoundError_1.CadClientesNotFoundError),
    tslib_1.__param(0, routing_controllers_1.Param('cliCodigo')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cliente_1.Cliente]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/:cliCodigo'),
    tslib_1.__param(0, routing_controllers_1.Param('cliCodigo')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Cliente_1.Cliente]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/:cliCodigo'),
    tslib_1.__param(0, routing_controllers_1.Param('cliCodigo')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteController.prototype, "delete", null);
ClienteController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/cliente'),
    tslib_1.__metadata("design:paramtypes", [ClienteService_1.ClienteService])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=ClienteController.js.map