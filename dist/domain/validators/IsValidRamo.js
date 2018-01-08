"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
let IsValidRamoConstraint = class IsValidRamoConstraint {
    validate(value, validationArguments) {
        if (0 === value) {
            return false;
        }
        return true;
    }
    defaultMessage(validationArguments) {
        return 'O produto deve ser informado';
    }
};
IsValidRamoConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsValidRamoConstraint);
function IsValidRamo(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'IsValidRamo',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: IsValidRamoConstraint,
        });
    };
}
exports.IsValidRamo = IsValidRamo;
//# sourceMappingURL=IsValidRamo.js.map