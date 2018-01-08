"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
let IsValidQtdParcelasConstraint = class IsValidQtdParcelasConstraint {
    constructor() {
        this.min = 1;
        this.max = 90;
        this.numParcelas = 0;
    }
    validate(value, validationArguments) {
        this.numParcelas = value;
        if (this.numParcelas < this.min || this.numParcelas > this.max) {
            return false;
        }
        return true;
    }
    defaultMessage(validationArguments) {
        return 'Numero de parcelas [' + this.numParcelas + '] fora da faixa estabelecida [' + this.min + ' - ' + this.max + ']';
    }
};
IsValidQtdParcelasConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsValidQtdParcelasConstraint);
function IsValidQtdParcelas(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'IsValidQtdParcelas',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: IsValidQtdParcelasConstraint,
        });
    };
}
exports.IsValidQtdParcelas = IsValidQtdParcelas;
//# sourceMappingURL=IsValidQtdParcelas.js.map