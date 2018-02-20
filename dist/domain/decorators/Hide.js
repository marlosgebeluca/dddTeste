"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const metadataKey = 'custom:anotations:hide';
function Hide(hide) {
    return (target, propertyKey) => {
        Reflect.defineMetadata(metadataKey, hide, target, propertyKey);
    };
}
exports.Hide = Hide;
function getHide(target, propertyKey) {
    return Reflect.getMetadata(metadataKey, target, propertyKey);
}
exports.getHide = getHide;
//# sourceMappingURL=Hide.js.map