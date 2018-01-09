"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const EmDoctos_1 = require("../../models/EmDoctos");
let EndossoRepository = class EndossoRepository {
    constructor(endossoMapper) {
        this.dbRepository = typeorm_1.getRepository(EmDoctos_1.EmDoctos);
        this.endossoMapper = endossoMapper;
    }
    find(args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const emDoctos = yield this.dbRepository.find({
                where: Object.assign({}, args),
            });
            return emDoctos.filter(doc => {
                return doc.docTipoMovto !== 'AP';
            }).map(this.endossoMapper.toEntity);
        });
    }
    findOne(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const emDocto = yield this.dbRepository.findOne({ docNumProposta });
            const entidade = this.endossoMapper.toEntity(emDocto);
            if (entidade['docTipoMovto'] === 'AP') {
                throw new Error('NOT_FOUND');
            }
            return entidade;
        });
    }
    save(endosso) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const db = this.endossoMapper.toDatabase(endosso);
            const novoEmDoctos = yield this.dbRepository.save(db);
            const entidade = this.endossoMapper.toEntity(novoEmDoctos);
            return entidade;
        });
    }
    delete(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const emDocto = yield this.dbRepository.findOne({ docNumProposta });
            if (emDocto === undefined || emDocto.docTipoMovto === 'AP') {
                throw new Error('NOT_FOUND');
            }
            yield this.dbRepository.remove(emDocto);
            return 'Endosso ' + docNumProposta + ' excluido!';
        });
    }
};
EndossoRepository = tslib_1.__decorate([
    typedi_1.Service('endosso.repository'),
    tslib_1.__param(0, typedi_1.Inject('endosso.mapper')),
    tslib_1.__metadata("design:paramtypes", [Object])
], EndossoRepository);
exports.EndossoRepository = EndossoRepository;
//# sourceMappingURL=EndossoRepository.js.map