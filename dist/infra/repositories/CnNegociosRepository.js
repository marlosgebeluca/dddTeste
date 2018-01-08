"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const CnNegocios_1 = require("../models/cnNegocios/CnNegocios");
const CnNegociosMapper_1 = require("../mappers/CnNegociosMapper");
let CnNegociosRepository = class CnNegociosRepository {
    constructor() {
        this.dbRepository = typeorm_1.getRepository(CnNegocios_1.CnNegocios);
    }
    find(args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cnNegocios = yield this.dbRepository.find({
                where: Object.assign({}, args),
            });
            return cnNegocios.map(CnNegociosMapper_1.CnNegociosMapper.toEntity);
        });
    }
    findOne(cnCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const telefone = yield this.dbRepository.findOne({ cnCodigo });
            return CnNegociosMapper_1.CnNegociosMapper.toEntity(telefone);
        });
    }
    save(cnNegocios) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const novoTelefone = yield this.dbRepository.save(CnNegociosMapper_1.CnNegociosMapper.toDatabase(cnNegocios));
            return CnNegociosMapper_1.CnNegociosMapper.toEntity(novoTelefone);
        });
    }
    delete(cnCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.dbRepository.delete(cnCodigo);
            return;
        });
    }
};
CnNegociosRepository = tslib_1.__decorate([
    typedi_1.Service()
], CnNegociosRepository);
exports.CnNegociosRepository = CnNegociosRepository;
//# sourceMappingURL=CnNegociosRepository.js.map