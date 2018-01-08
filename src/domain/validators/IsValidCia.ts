import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';

@ValidatorConstraint({ async: true })
class IsValidClienteConstraint implements ValidatorConstraintInterface {

  public validate(value: any, validationArguments?: ValidationArguments | undefined): boolean | Promise<boolean> {
    if (0 === value) {
      return false;
    }

    return true;
  }

  public defaultMessage(validationArguments?: ValidationArguments): string {
    return 'A seguradora deve ser informada';
  }
}

export function IsValidCia(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsValidCia',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsValidClienteConstraint,
    });
  };
}
