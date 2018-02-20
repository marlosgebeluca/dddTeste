import 'reflect-metadata';

const metadataKey = 'custom:anotations:apareceRelacao';

export function ApareceRelacao(aparece: boolean): any {
  return (target: object, propertyKey: string | symbol) => {
    Reflect.defineMetadata(metadataKey, aparece, target, propertyKey);
  };
}

export function getApareceRelacao(target: any, propertyKey: string): any {
  return Reflect.getMetadata(metadataKey, target, propertyKey);
}
