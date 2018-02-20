import 'reflect-metadata';

const metadataKey = 'custom:anotations:y';

export function TamanhoY(y: number): any {
  return (target: object, propertyKey: string | symbol) => {
    Reflect.defineMetadata(metadataKey, y, target, propertyKey);
  };
}

export function getTamanhoY(target: any, propertyKey: string): any {
  return Reflect.getMetadata(metadataKey, target, propertyKey);
}
