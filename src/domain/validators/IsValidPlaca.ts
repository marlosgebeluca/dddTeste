import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';

@ValidatorConstraint({ async: true })
class IsValidPlacaConstraint implements ValidatorConstraintInterface {

  public validate(value: any, validationArguments?: ValidationArguments | undefined): boolean | Promise<boolean> {
    const regexp = new RegExp(/([a-zA-Z]{3}\-\d{4})/g);
    const test = regexp.test(value);

    if (test) {
      return true;
    }

    return false;
  }

  public defaultMessage(validationArguments?: ValidationArguments): string {
    return 'Placa fora de padrão. Verifique!';
  }
}

export function IsValidPlaca(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsValidPlaca',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsValidPlacaConstraint,
    });
  };
}
