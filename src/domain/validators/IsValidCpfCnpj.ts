import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsValidCpfCnpj(validationOptions?: ValidationOptions): any {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'IsValidCpfCnpj',
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

          value = value.replace(/[^0-9]/g, '');

          if (value.length > 11) {
            return validarCnpj(value);
          } else {
            return validarCpf(value);
          }
        },
      },
    });
  };
}

export function validarCpf(cpf: string): boolean {
  let numeros: string;
  let digitos: string;
  let soma: number;
  let resultado: number;
  let digitosIguais = 1;

  if (cpf.length < 11) {
    return false;
  }

  for (let i = 0; i < cpf.length - 1; i++) {
    if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
      digitosIguais = 0;
      break;
    }
  }

  if (!digitosIguais) {
    numeros = cpf.substring(0, 9);
    digitos = cpf.substring(9);
    soma = 0;

    for (let i = 10; i > 1; i--) {
      soma += +numeros.charAt(10 - i) * i;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado !== +digitos.charAt(0)) {
      return false;
    }

    numeros = cpf.substring(0, 10);
    soma = 0;

    for (let i = 11; i > 1; i--) {
      soma += +numeros.charAt(11 - i) * i;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado !== +digitos.charAt(1)) {
      return false;
    }

    return true;
  }

  return false;
}

export function validarCnpj(cnpj: string): boolean {
  let numeros: string;
  let digitos: string;
  let soma: number;
  let resultado: number;
  let pos: number;
  let tamanho: number;
  let digitosIguais = 1;

  if (cnpj.length < 14 && cnpj.length < 15) {
    return false;
  }

  for (let i = 0; i < cnpj.length - 1; i++) {
    if (cnpj.charAt(i) !== cnpj.charAt(i + 1)) {
      digitosIguais = 0;
      break;
    }
  }

  if (!digitosIguais) {
    tamanho = cnpj.length - 2;
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += +numeros.charAt(tamanho - i) * pos--;

      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado !== +digitos.charAt(0)) {
      return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += +numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado !== +digitos.charAt(1)) {
      return false;
    }

    return true;
  }

  return false;
}
