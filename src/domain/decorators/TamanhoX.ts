import 'reflect-metadata';

const metadataKey = 'custom:anotations:x';

export function TamanhoX(x: number): any {
  return (target: object, propertyKey: string | symbol) => {
    Reflect.defineMetadata(metadataKey, x, target, propertyKey);
  };
}

export function getTamanhoX(target: any, propertyKey: string): any {
  return Reflect.getMetadata(metadataKey, target, propertyKey);
}
