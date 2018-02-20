import 'reflect-metadata';

const metadataKey = 'custom:anotations:tipoCampo';

export function TipoCampo(tipo: string): any {
  return (target: object, propertyKey: string | symbol) => {
    Reflect.defineMetadata(metadataKey, tipo, target, propertyKey);
  };
}

export function getTipoCampo(target: any, propertyKey: string): any {
  return Reflect.getMetadata(metadataKey, target, propertyKey);
}
