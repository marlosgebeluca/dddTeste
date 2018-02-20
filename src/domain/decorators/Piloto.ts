import 'reflect-metadata';

export function getDecorators(metadataKeyPart: string, target: any, propertyName?: string | symbol): string[] {
  const keys: any[] = propertyName
    ? Reflect.getMetadataKeys(target, propertyName)
    : Reflect.getMetadataKeys(target);

  const decorators = keys
    .filter(key => key.toString().startsWith(metadataKeyPart))
    .reduce((values, key) => {
      const currValues = propertyName ? Reflect.getMetadata(key, target, propertyName) : Reflect.getMetadata(key, target);

      return values.concat(currValues);
    }, []);

  return decorators;
}
