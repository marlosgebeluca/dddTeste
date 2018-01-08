"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const EmDoctos_1 = require("../../models/EmDoctos");
const ApoliceNotFoundError_1 = require("../../../app/errors/ApoliceNotFoundError");
let ApoliceRepository = class ApoliceRepository {
    constructor(apoliceMapper) {
        this.dbRepository = typeorm_1.getRepository(EmDoctos_1.EmDoctos);
        this.apoliceMapper = apoliceMapper;
    }
    find(args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const emDoctos = yield this.dbRepository.find({
                select: [
                    'docPropApolice',
                    'docNumProposta',
                    'cliCodigo',
                    'ramoCodigo',
                    'docApolice',
                    'docTipoMovto',
                ],
                where: Object.assign({}, args),
            });
            return emDoctos.filter(doc => {
                return doc.docTipoMovto === 'AP';
            }).map(this.apoliceMapper.toEntity);
        });
    }
    findOne(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const emDocto = yield this.dbRepository.findOne({ docNumProposta });
            const entidade = this.apoliceMapper.toEntity(emDocto);
            if (!emDocto || emDocto['docTipoMovto'] !== 'AP') {
                throw new ApoliceNotFoundError_1.ApoliceNotFoundError();
            }
            else {
                entidade.endossos = yield this.findEndossos(docNumProposta);
            }
            return entidade;
        });
    }
    save(apolice) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const db = this.apoliceMapper.toDatabase(apolice);
            delete db.endossos;
            const novoEmDoctos = yield this.dbRepository.save(db);
            const entidade = this.apoliceMapper.toEntity(novoEmDoctos);
            entidade.endossos = yield this.findEndossos(entidade.docNumProposta);
            return entidade;
        });
    }
    delete(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const emDocto = yield this.dbRepository.findOne({ docNumProposta });
            if (emDocto === undefined) {
                throw new ApoliceNotFoundError_1.ApoliceNotFoundError();
            }
            else if (emDocto.endossos && emDocto.endossos.length) {
                for (const endosso of emDocto.endossos) {
                    yield this.dbRepository.remove(endosso);
                }
            }
            yield this.dbRepository.remove(emDocto);
            return 'Apólice ' + docNumProposta + ' excluida!';
        });
    }
    findEndossos(docNumProposta) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const endossos = yield typeorm_1.getRepository(EmDoctos_1.EmDoctos)
                .createQueryBuilder('emDoctos')
                .select('emDoctos.doc_num_proposta', 'endosso')
                .addSelect('emDoctos.doc_tipo_movto', 'tipo_endosso')
                .where('emDoctos.doc_prop_apolice = :id and emDoctos.doc_num_proposta <> :id', { id: docNumProposta })
                .getRawMany();
            return endossos;
        });
    }
};
ApoliceRepository = tslib_1.__decorate([
    typedi_1.Service('apolice.repository'),
    tslib_1.__param(0, typedi_1.Inject('apolice.mapper')),
    tslib_1.__metadata("design:paramtypes", [Object])
], ApoliceRepository);
exports.ApoliceRepository = ApoliceRepository;
//# sourceMappingURL=ApoliceRepository.js.map