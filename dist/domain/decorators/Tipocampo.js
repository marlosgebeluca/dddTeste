"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const metadataKey = 'custom:anotations:tipoCampo';
function TipoCampo(tipo) {
    return (target, propertyKey) => {
        Reflect.defineMetadata(metadataKey, tipo, target, propertyKey);
    };
}
exports.TipoCampo = TipoCampo;
function getTipoCampo(target, propertyKey) {
    return Reflect.getMetadata(metadataKey, target, propertyKey);
}
exports.getTipoCampo = getTipoCampo;
//# sourceMappingURL=Tipocampo.js.map