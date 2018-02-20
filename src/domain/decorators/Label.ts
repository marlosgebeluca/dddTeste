import 'reflect-metadata';

const metadataKey = 'custom:anotations:label';

export function Label(label: string): any {
  return (target: object, propertyKey: string | symbol) => {
    Reflect.defineMetadata(metadataKey, label, target, propertyKey);
  };
}

export function getLabel(target: any, propertyKey: string): any {
  return Reflect.getMetadata(metadataKey, target, propertyKey);
}
