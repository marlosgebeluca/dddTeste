"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const CalculoSchema_1 = require("./CalculoSchema");
const ApoliceSchema_1 = require("./ApoliceSchema");
function buildSchema() {
    return graphql_tools_1.mergeSchemas({
        schemas: [CalculoSchema_1.CalculoSchema(), ApoliceSchema_1.ApoliceSchema()],
    });
}
exports.buildSchema = buildSchema;
//# sourceMappingURL=RootSchema.js.map