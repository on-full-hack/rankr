"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor(model) {
        this.model = model;
        this.add = this.add.bind(this);
        this.getAll = this.getAll.bind(this);
        this.find = this.find.bind(this);
        this.findById = this.findById.bind(this);
        this.where = this.where.bind(this);
        this.removeOne = this.removeOne.bind(this);
        this.update = this.update.bind(this);
    }
    add(object) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.create(object);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find();
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.model.find(filter);
            const products = yield query.exec();
            return products;
        });
    }
    where(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.model.where(filter);
            const products = yield query.exec();
            return products;
        });
    }
    removeOne(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.model.findOneAndDelete(filter);
            const deletedProduct = yield query.exec();
            return deletedProduct;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.model.findById(id);
            return yield query.exec();
        });
    }
    update(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.model.findOneAndUpdate(filter, update);
            return yield query.exec();
        });
    }
}
exports.default = Repository;
//# sourceMappingURL=Repository.js.map