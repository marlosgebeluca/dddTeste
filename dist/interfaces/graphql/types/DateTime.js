"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const graphql_1 = require("graphql");
exports.DateTime = new graphql_1.GraphQLScalarType({
    name: 'DateTime',
    serialize(value) {
        const date = moment(value);
        if (!date.isValid()) {
            throw new graphql_1.GraphQLError('Field serialize error: value is an invalid Date');
        }
        return date.format();
    },
    parseValue(value) {
        const date = moment(value);
        if (!date.isValid()) {
            throw new graphql_1.GraphQLError('Field parse error: value is an invalid Date');
        }
        return date.toDate();
    },
    parseLiteral(ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw new graphql_1.GraphQLError('Query error: Can only parse strings to date but got: ' + ast.kind);
        }
        const date = moment(ast.value);
        if (!date.isValid()) {
            throw new graphql_1.GraphQLError('Query error: Invalid date');
        }
        return date.toDate();
    },
});
//# sourceMappingURL=DateTime.js.map