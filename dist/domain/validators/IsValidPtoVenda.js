"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
let IsValidPtoVendaConstraint = class IsValidPtoVendaConstraint {
    validate(value, validationArguments) {
        if (0 === value) {
            return false;
        }
        return true;
    }
    defaultMessage(validationArguments) {
        return 'O ponto de venda deve ser informado';
    }
};
IsValidPtoVendaConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsValidPtoVendaConstraint);
function IsValidPtoVenda(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'IsValidPtoVenda',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: IsValidPtoVendaConstraint,
        });
    };
}
exports.IsValidPtoVenda = IsValidPtoVenda;
//# sourceMappingURL=IsValidPtoVenda.js.map