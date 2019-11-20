import { Model } from 'mongoose';

export default class Repository {
    constructor(public model: Model<any>) {
        this.add = this.add.bind(this);
        this.getAll = this.getAll.bind(this);
        this.find = this.find.bind(this);
        this.findById = this.findById.bind(this);
        this.where = this.where.bind(this);
        this.removeOne = this.removeOne.bind(this);
        this.update = this.update.bind(this);
    }

    async add(object: any) {
        return await this.model.create(object);
    }

    async getAll() {
        return this.model.find();
    }

    async find(filter: string) {
        const query = this.model.find(filter);
        const products = await query.exec();
        return products;
    }

    async where(filter: string) {
        const query = this.model.where(filter);
        const products = await query.exec();
        return products;
    }

    async removeOne(filter: string) {
        const query = this.model.findOneAndDelete(filter);
        const deletedProduct = await query.exec();
        return deletedProduct;
    }

    async findById(id: string) {
        const query = this.model.findById(id);
        return await query.exec();
    }

    async update(filter: string, update: any) {
        const query = this.model.findOneAndUpdate(filter, update);
        return await query.exec();
    }
}
