"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
let IsValidClienteConstraint = class IsValidClienteConstraint {
    validate(value, validationArguments) {
        if (0 === value) {
            return false;
        }
        return true;
    }
    defaultMessage(validationArguments) {
        return 'A seguradora deve ser informada';
    }
};
IsValidClienteConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsValidClienteConstraint);
function IsValidCia(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'IsValidCia',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: IsValidClienteConstraint,
        });
    };
}
exports.IsValidCia = IsValidCia;
//# sourceMappingURL=IsValidCia.js.map