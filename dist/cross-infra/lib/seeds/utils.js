"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * Times repeats a function n times
 * @param n amount of loops
 * @param iteratee this function gets n-times called
 */
exports.times = (n, iteratee) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const rs = [];
    for (let i = 0; i < n; i++) {
        const r = yield iteratee(i);
        rs.push(r);
    }
    return rs;
});
//# sourceMappingURL=utils.js.map