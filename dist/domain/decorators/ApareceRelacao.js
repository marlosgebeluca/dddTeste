"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const metadataKey = 'custom:anotations:apareceRelacao';
function ApareceRelacao(aparece) {
    return (target, propertyKey) => {
        Reflect.defineMetadata(metadataKey, aparece, target, propertyKey);
    };
}
exports.ApareceRelacao = ApareceRelacao;
function getApareceRelacao(target, propertyKey) {
    return Reflect.getMetadata(metadataKey, target, propertyKey);
}
exports.getApareceRelacao = getApareceRelacao;
//# sourceMappingURL=ApareceRelacao.js.map