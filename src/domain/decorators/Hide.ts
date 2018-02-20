import 'reflect-metadata';

const metadataKey = 'custom:anotations:hide';

export function Hide(hide: string | boolean): any {
  return (target: object, propertyKey: string | symbol) => {
    Reflect.defineMetadata(metadataKey, hide, target, propertyKey);
  };
}

export function getHide(target: any, propertyKey: string): any {
  return Reflect.getMetadata(metadataKey, target, propertyKey);
}
