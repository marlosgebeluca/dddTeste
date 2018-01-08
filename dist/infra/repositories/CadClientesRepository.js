"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const CadClientes_1 = require("../models/cadClientes/CadClientes");
const CadClientesMapper_1 = require("../mappers/CadClientesMapper");
let CadClientesRepository = class CadClientesRepository {
    constructor() {
        this.dbRepository = typeorm_1.getRepository(CadClientes_1.CadClientes);
    }
    find(args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cadTelefones = yield this.dbRepository.find({
                where: Object.assign({}, args),
            });
            return cadTelefones.map(CadClientesMapper_1.CadClientesMapper.toEntity);
        });
    }
    findOne(cliCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cliente = yield this.dbRepository.findOne({ cliCodigo });
            return CadClientesMapper_1.CadClientesMapper.toEntity(cliente);
        });
    }
    save(cadTelefones) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const novoCliente = yield this.dbRepository.save(CadClientesMapper_1.CadClientesMapper.toDatabase(cadTelefones));
            return CadClientesMapper_1.CadClientesMapper.toEntity(novoCliente);
        });
    }
    delete(cliCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.dbRepository.delete(cliCodigo);
            return;
        });
    }
};
CadClientesRepository = tslib_1.__decorate([
    typedi_1.Service()
], CadClientesRepository);
exports.CadClientesRepository = CadClientesRepository;
//# sourceMappingURL=CadClientesRepository.js.map