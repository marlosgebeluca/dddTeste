"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const metadataKey = 'custom:anotations:x';
function TamanhoX(x) {
    return (target, propertyKey) => {
        Reflect.defineMetadata(metadataKey, x, target, propertyKey);
    };
}
exports.TamanhoX = TamanhoX;
function getTamanhoX(target, propertyKey) {
    return Reflect.getMetadata(metadataKey, target, propertyKey);
}
exports.getTamanhoX = getTamanhoX;
//# sourceMappingURL=TamanhoX.js.map