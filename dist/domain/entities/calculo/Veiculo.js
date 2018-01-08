"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import { Max, Matches, IsOptional, IsIn, IsBoolean, IsNumber, IsString } from 'class-validator';
const class_validator_1 = require("class-validator");
const Combustiveis_1 = require("../../enums/Combustiveis");
const IsValidPlaca_1 = require("../../validators/IsValidPlaca");
const ANO_MAXIMO = (new Date()).getFullYear() + 1;
class Veiculo {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Veiculo.prototype, "fipe", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.Max(ANO_MAXIMO),
    tslib_1.__metadata("design:type", Number)
], Veiculo.prototype, "anoModelo", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Veiculo.prototype, "marca", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Veiculo.prototype, "modelo", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString()
    // @Matches(/([a-zA-Z]{3}\-\d{4})/g)
    ,
    IsValidPlaca_1.IsValidPlaca(),
    tslib_1.__metadata("design:type", String)
], Veiculo.prototype, "placa", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], Veiculo.prototype, "chassi", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsIn(Combustiveis_1.Combustiveis.combustiveisEnum()),
    tslib_1.__metadata("design:type", Number)
], Veiculo.prototype, "combustivel", void 0);
tslib_1.__decorate([
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], Veiculo.prototype, "zeroKm", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], Veiculo.prototype, "lotacao", void 0);
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map