import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import * as moment from 'moment';

export function IsValidDate(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsValidDate',
      target: object.constructor,
      propertyName,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          if (!value) {
            return false;
          }

          if (typeof value !== 'string') {
            return false;
          }

          try {
            moment(value, 'YYYY-MM-DD');
          } catch (ex) {
            return false;
          }

          return true;
        },
      },
    });
  };
}
