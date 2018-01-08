"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
let IsValidDocApoliceConstraint = class IsValidDocApoliceConstraint {
    constructor() {
        this.minLength = 5;
        this.maxLength = 30;
        this.codErro = -1;
    }
    validate(value, validationArguments) {
        if (value.length < this.minLength || value.length > this.maxLength) {
            this.codErro = 0;
            return false;
        }
        return true;
    }
    defaultMessage(validationArguments) {
        let erro;
        erro = ['Apólice fora do tamanho padrão mínimo [' + this.minLength + '] e máximo [' + this.maxLength + ']'];
        return erro[this.codErro];
    }
};
IsValidDocApoliceConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsValidDocApoliceConstraint);
function IsValidDocApolice(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'IsValidDocApolice',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: IsValidDocApoliceConstraint,
        });
    };
}
exports.IsValidDocApolice = IsValidDocApolice;
//# sourceMappingURL=IsValidDocApolice.js.map