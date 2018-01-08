import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';
import { Container } from 'typedi';
import { ApoliceService } from '../../domain/services/ApoliceService';

@ValidatorConstraint({ async: true })
class ExisteApoliceConstraint implements ValidatorConstraintInterface {
  private apoliceService: ApoliceService = Container.get(ApoliceService);

  public validate(value: any, validationArguments?: ValidationArguments | undefined): boolean | Promise<boolean> {
    const apolice = this.apoliceService.findOne(value);

    if (!apolice) {
      return false;
    }

    return true;
  }
}

export function ExisteApolice(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'ExisteApolice',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: ExisteApoliceConstraint,
    });
  };
}
