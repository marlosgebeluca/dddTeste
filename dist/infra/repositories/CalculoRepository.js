"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const Calculo_1 = require("../models/calculo/Calculo");
const Condutor_1 = require("../models/condutor/Condutor");
const CalculoSeguradora_1 = require("../models/calculoSeguradora/CalculoSeguradora");
const CalculoMapper_1 = require("../mappers/CalculoMapper");
let CalculoRepository = class CalculoRepository {
    constructor() {
        this.calculoDbRepository = typeorm_1.getRepository(Calculo_1.Calculo);
        this.condutorDbRepository = typeorm_1.getRepository(Condutor_1.Condutor);
        this.calculoSeguradoraDbRepository = typeorm_1.getRepository(CalculoSeguradora_1.CalculoSeguradora);
    }
    find(...args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const calculos = yield this.calculoDbRepository.find(...args, {
                relations: ['seguradoras', 'condutores'],
            });
            return calculos.map(CalculoMapper_1.CalculoMapper.toEntity);
        });
    }
    findOne(calcNumero) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const calculo = yield this.calculoDbRepository.findOne(calcNumero, {
                relations: ['seguradoras', 'condutores'],
            });
            if (calculo) {
                return CalculoMapper_1.CalculoMapper.toEntity(calculo);
            }
            return;
        });
    }
    save(calculo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const novoCalculo = yield this.calculoDbRepository.save(CalculoMapper_1.CalculoMapper.toDatabase(calculo));
            return CalculoMapper_1.CalculoMapper.toEntity(novoCalculo);
        });
    }
    delete(calcNumero) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const calculo = yield this.calculoDbRepository.findOne(calcNumero, {
                relations: ['seguradoras', 'condutores'],
            });
            yield this.condutorDbRepository.delete({ calculo });
            yield this.calculoSeguradoraDbRepository.delete({ calculo });
            yield this.calculoDbRepository.delete({ calcNumero });
            return;
        });
    }
};
CalculoRepository = tslib_1.__decorate([
    typedi_1.Service()
], CalculoRepository);
exports.CalculoRepository = CalculoRepository;
//# sourceMappingURL=CalculoRepository.js.map