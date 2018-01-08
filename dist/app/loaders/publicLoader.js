"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
exports.publicLoader = (settings) => {
    if (settings) {
        const expressApp = settings.getData('express_app');
        expressApp
            .use(express.static(path.join(__dirname, '../..', 'public'), { maxAge: 31557600000 }))
            .use(favicon(path.join(__dirname, '../..', 'public', 'favicon.ico')));
    }
};
//# sourceMappingURL=publicLoader.js.map