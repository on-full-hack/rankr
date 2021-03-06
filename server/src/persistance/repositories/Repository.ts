import { Model } from 'mongoose';

export default class Repository {
  constructor(public model: any) {}

  add = async (object: any) => {
    return await this.model.create(object);
  };

  getAll = async () => {
    return this.model.find();
  };

  find = async (filter: string) => {
    const query = this.model.find(filter);
    const products = await query.exec();
    return products;
  };

  where = async (filter: string) => {
    const query = this.model.where(filter);
    const products = await query.exec();
    return products;
  };

  removeOne = async (filter: Object) => {
    const query = this.model.findOneAndDelete(filter);
    const deletedProduct = await query.exec();
    return deletedProduct;
  };

  findById = async (id: string) => {
    const query = this.model.findById(id);
    return await query.exec();
  };

  update = async (filter: string, update: any) => {
    const query = this.model.findOneAndUpdate(filter, update);
    return await query.exec();
  };
}
