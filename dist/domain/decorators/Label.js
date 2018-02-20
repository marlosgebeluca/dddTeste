"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const metadataKey = 'custom:anotations:label';
function Label(label) {
    return (target, propertyKey) => {
        Reflect.defineMetadata(metadataKey, label, target, propertyKey);
    };
}
exports.Label = Label;
function getLabel(target, propertyKey) {
    return Reflect.getMetadata(metadataKey, target, propertyKey);
}
exports.getLabel = getLabel;
//# sourceMappingURL=Label.js.map