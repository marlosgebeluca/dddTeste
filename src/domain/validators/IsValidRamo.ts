import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';

@ValidatorConstraint({ async: true })
class IsValidRamoConstraint implements ValidatorConstraintInterface {

  public validate(value: any, validationArguments?: ValidationArguments | undefined): boolean | Promise<boolean> {
    if (0 === value) {
      return false;
    }

    return true;
  }

  public defaultMessage(validationArguments?: ValidationArguments): string {
    return 'O produto deve ser informado';
  }
}

export function IsValidRamo(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsValidRamo',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsValidRamoConstraint,
    });
  };
}
