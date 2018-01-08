import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';

@ValidatorConstraint({ async: true })
class IsValidPtoVendaConstraint implements ValidatorConstraintInterface {

  public validate(value: any, validationArguments?: ValidationArguments | undefined): boolean | Promise<boolean> {
    if (0 === value) {
      return false;
    }

    return true;
  }

  public defaultMessage(validationArguments?: ValidationArguments): string {
    return 'O ponto de venda deve ser informado';
  }
}

export function IsValidPtoVenda(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsValidPtoVenda',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsValidPtoVendaConstraint,
    });
  };
}
