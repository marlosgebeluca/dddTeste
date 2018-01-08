"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
let IsValidPlacaConstraint = class IsValidPlacaConstraint {
    validate(value, validationArguments) {
        const regexp = new RegExp(/([a-zA-Z]{3}\-\d{4})/g);
        const test = regexp.test(value);
        if (test) {
            return true;
        }
        return false;
    }
    defaultMessage(validationArguments) {
        return 'Placa fora de padrão. Verifique!';
    }
};
IsValidPlacaConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsValidPlacaConstraint);
function IsValidPlaca(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'IsValidPlaca',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: IsValidPlacaConstraint,
        });
    };
}
exports.IsValidPlaca = IsValidPlaca;
//# sourceMappingURL=IsValidPlaca.js.map