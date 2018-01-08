"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class SchemaDados1512960732842 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`create schema Dados;`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`drop schema Dados;`);
        });
    }
}
exports.SchemaDados1512960732842 = SchemaDados1512960732842;
//# sourceMappingURL=1512960732842-SchemaDados.js.map