"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const CadTelefones_1 = require("../models/cadTelefones/CadTelefones");
const CadTelefonesMapper_1 = require("../mappers/CadTelefonesMapper");
let CadTelefonesRepository = class CadTelefonesRepository {
    constructor() {
        this.dbRepository = typeorm_1.getRepository(CadTelefones_1.CadTelefones);
    }
    find(args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cadTelefones = yield this.dbRepository.find({
                where: Object.assign({}, args),
            });
            return cadTelefones.map(CadTelefonesMapper_1.CadTelefonesMapper.toEntity);
        });
    }
    findOne(foneCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const telefone = yield this.dbRepository.findOne({ foneCodigo });
            return CadTelefonesMapper_1.CadTelefonesMapper.toEntity(telefone);
        });
    }
    save(cadTelefones) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const novoTelefone = yield this.dbRepository.save(CadTelefonesMapper_1.CadTelefonesMapper.toDatabase(cadTelefones));
            return CadTelefonesMapper_1.CadTelefonesMapper.toEntity(novoTelefone);
        });
    }
    delete(foneCodigo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.dbRepository.delete(foneCodigo);
            return;
        });
    }
};
CadTelefonesRepository = tslib_1.__decorate([
    typedi_1.Service()
], CadTelefonesRepository);
exports.CadTelefonesRepository = CadTelefonesRepository;
//# sourceMappingURL=CadTelefonesRepository.js.map