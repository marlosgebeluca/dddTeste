"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Faker = require("faker");
const EntityFactory_1 = require("./EntityFactory");
const BluePrint_1 = require("./BluePrint");
class Factory {
    constructor(faker) {
        this.faker = faker;
        this.blueprints = {};
    }
    static getInstance() {
        if (!Factory.instance) {
            Factory.instance = new Factory(Faker);
        }
        return Factory.instance;
    }
    getConnection() {
        return this.connection;
    }
    setConnection(connection) {
        this.connection = connection;
    }
    define(entityClass, callback) {
        this.blueprints[this.getNameOfEntity(entityClass)] = new BluePrint_1.BluePrint(entityClass, callback);
    }
    get(entityClass, ...args) {
        return new EntityFactory_1.EntityFactory(this.faker, this.connection, this.blueprints[this.getNameOfEntity(entityClass)], args);
    }
    getNameOfEntity(EntityClass) {
        return new EntityClass().constructor.name;
    }
}
exports.Factory = Factory;
//# sourceMappingURL=Factory.js.map