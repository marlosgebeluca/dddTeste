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
        return 'O cliente deve ser informado';
    }
};
IsValidClienteConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsValidClienteConstraint);
function IsValidCliente(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'IsValidCliente',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: IsValidClienteConstraint,
        });
    };
}
exports.IsValidCliente = IsValidCliente;
//# sourceMappingURL=IsValidCliente.js.map