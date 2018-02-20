import 'reflect-metadata';

const metadataKey = 'custom:anotations:campoPersonalizado';

export function CampoPersonalizado(hide: boolean): any {
  return (target: object, propertyKey: string | symbol) => {
    Reflect.defineMetadata(metadataKey, hide, target, propertyKey);
  };
}

export function getCampoPersonalizado(target: any, propertyKey: string): any {
  return Reflect.getMetadata(metadataKey, target, propertyKey);
}
