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
    return 'O cliente deve ser informado';
  }
}

export function IsValidCliente(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsValidCliente',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsValidClienteConstraint,
    });
  };
}
