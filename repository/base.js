export class BaseRepo {
  constructor(_model) {
    this._model = _model;
  }

  async create(doc) {
    return this._model.create(doc);
  }
  async createMany(doc) {
    return await this._model.insertMany(doc);
  }

  async findOne(filter, projection, options) {
    return this._model.findOne(filter, projection, options);
  }

  async findById(id, projection, options) {
    return this._model.findById(id, projection, options);
  }

  async find(filter, projection, options) {
    return this._model.find(filter, projection, options);
  }

  async updateOne(filter, update, options) {
    return this._model.updateOne(filter, update, options);
  }

  async updateMany(filter, update, options) {
    return this._model.updateMany(filter, update, options);
  }

  async updateById(id, update, options) {
    return this._model.findByIdAndUpdate(id, update, options);
  }

  async deleteOne(filter, options) {
    return this._model.deleteOne(filter, options);
  }

  async deleteById(id, options) {
    return this._model.findByIdAndDelete(id, options);
  }

  async deleteMany(filter, options) {
    return this._model.deleteMany(filter, options);
  }

  async aggregate(stages) {
    return this._model.aggregate(stages);
  }
}
