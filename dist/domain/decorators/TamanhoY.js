"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const metadataKey = 'custom:anotations:y';
function TamanhoY(y) {
    return (target, propertyKey) => {
        Reflect.defineMetadata(metadataKey, y, target, propertyKey);
    };
}
exports.TamanhoY = TamanhoY;
function getTamanhoY(target, propertyKey) {
    return Reflect.getMetadata(metadataKey, target, propertyKey);
}
exports.getTamanhoY = getTamanhoY;
//# sourceMappingURL=TamanhoY.js.map