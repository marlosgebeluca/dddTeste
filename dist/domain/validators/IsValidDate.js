"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const moment = require("moment");
function IsValidDate(validationOptions) {
    return (object, propertyName) => {
        class_validator_1.registerDecorator({
            name: 'IsValidDate',
            target: object.constructor,
            propertyName,
            validator: {
                validate(value, args) {
                    if (!value) {
                        return false;
                    }
                    if (typeof value !== 'string') {
                        return false;
                    }
                    try {
                        moment(value, 'YYYY-MM-DD');
                    }
                    catch (ex) {
                        return false;
                    }
                    return true;
                },
            },
        });
    };
}
exports.IsValidDate = IsValidDate;
//# sourceMappingURL=IsValidDate.js.map