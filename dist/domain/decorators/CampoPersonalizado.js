"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const metadataKey = 'custom:anotations:campoPersonalizado';
function CampoPersonalizado(hide) {
    return (target, propertyKey) => {
        Reflect.defineMetadata(metadataKey, hide, target, propertyKey);
    };
}
exports.CampoPersonalizado = CampoPersonalizado;
function getCampoPersonalizado(target, propertyKey) {
    return Reflect.getMetadata(metadataKey, target, propertyKey);
}
exports.getCampoPersonalizado = getCampoPersonalizado;
//# sourceMappingURL=CampoPersonalizado.js.map