"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class EntityFactory {
    constructor(faker, connection, blueprint, args) {
        this.faker = faker;
        this.connection = connection;
        this.blueprint = blueprint;
        this.args = args;
        this.identifier = 'id';
    }
    each(iterator) {
        this.eachFn = iterator;
        return this;
    }
    make() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeEntity(this.blueprint.create(this.faker, this.args));
        });
    }
    create() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const entity = yield this.build();
            if (typeof this.eachFn === 'function') {
                yield this.eachFn(entity, this.faker);
            }
            return entity;
        });
    }
    createMany(amount) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < amount; i++) {
                const entity = yield this.create();
                if (entity) {
                    results.push(entity);
                }
            }
            return results;
        });
    }
    build() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.connection) {
                const entity = yield this.make();
                const em = this.connection.createEntityManager();
                try {
                    return yield em.save(this.blueprint.EntityClass, entity);
                }
                catch (error) {
                    console.error('saving entity failed', error);
                    return;
                }
            }
            return;
        });
    }
    makeEntity(entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            for (const attribute in entity) {
                if (entity.hasOwnProperty(attribute)) {
                    if (typeof entity[attribute] === 'object' && entity[attribute] instanceof EntityFactory) {
                        const subEntityFactory = entity[attribute];
                        const subEntity = yield subEntityFactory.build();
                        entity[attribute] = subEntity[this.identifier];
                    }
                }
            }
            return entity;
        });
    }
}
exports.EntityFactory = EntityFactory;
//# sourceMappingURL=EntityFactory.js.map