import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';

@ValidatorConstraint({ async: true })
class IsValidQtdParcelasConstraint implements ValidatorConstraintInterface {
  private min = 1;
  private max = 90;
  private numParcelas = 0;
  public validate(value: any, validationArguments?: ValidationArguments | undefined): boolean | Promise<boolean> {
    this.numParcelas = value;

    if (this.numParcelas < this.min || this.numParcelas > this.max) {
      return false;
    }

    return true;
  }

  public defaultMessage(validationArguments?: ValidationArguments): string {
    return 'Numero de parcelas [' + this.numParcelas + '] fora da faixa estabelecida [' + this.min + ' - ' + this.max + ']';
  }
}

export function IsValidQtdParcelas(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsValidQtdParcelas',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsValidQtdParcelasConstraint,
    });
  };
}
