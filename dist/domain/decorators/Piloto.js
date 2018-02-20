"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function getDecorators(metadataKeyPart, target, propertyName) {
    const keys = propertyName
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
exports.getDecorators = getDecorators;
//# sourceMappingURL=Piloto.js.map