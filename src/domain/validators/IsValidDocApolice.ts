import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';

@ValidatorConstraint({ async: true })
class IsValidDocApoliceConstraint implements ValidatorConstraintInterface {
  private minLength = 5;
  private maxLength = 30;
  private codErro = -1;

  public validate(value: any, validationArguments?: ValidationArguments | undefined): boolean | Promise<boolean> {
    if (value.length < this.minLength || value.length > this.maxLength) {
      this.codErro = 0;
      return false;
    }

    return true;
  }

  public defaultMessage(validationArguments?: ValidationArguments): string {
    let erro: string[];
    erro = ['Apólice fora do tamanho padrão mínimo [' + this.minLength + '] e máximo [' + this.maxLength + ']'];

    return erro[this.codErro];
  }
}

export function IsValidDocApolice(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsValidDocApolice',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsValidDocApoliceConstraint,
    });
  };
}
