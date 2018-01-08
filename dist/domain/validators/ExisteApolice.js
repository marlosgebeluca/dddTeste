"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typedi_1 = require("typedi");
const ApoliceService_1 = require("../../domain/services/ApoliceService");
let ExisteApoliceConstraint = class ExisteApoliceConstraint {
    constructor() {
        this.apoliceService = typedi_1.Container.get(ApoliceService_1.ApoliceService);
    }
    validate(value, validationArguments) {
        const apolice = this.apoliceService.findOne(value);
        if (!apolice) {
            return false;
        }
        return true;
    }
};
ExisteApoliceConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], ExisteApoliceConstraint);
function ExisteApolice(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'ExisteApolice',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: ExisteApoliceConstraint,
        });
    };
}
exports.ExisteApolice = ExisteApolice;
//# sourceMappingURL=ExisteApolice.js.map