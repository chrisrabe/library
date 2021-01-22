const AppError = require('../../api/api.error');
const errorTypes = require('../../constants/error.types');
const pluginHelper = require('../helpers/query.helpers');

module.exports = schema => {
  schema.statics.createDoc = async function (req, document) {
    const doc = new this(document);

    try {
      return await doc.save();
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.badRequest.unknown, 'Bad Request', e),
      );
    }
  };

  schema.statics.updateDoc = async function (req, query, update, options = {}) {
    pluginHelper.runUpdateSetup(update, options);

    let result;

    try {
      await pluginHelper.findDocumentsToValidateOver(this, req, query, update);
      result = await this.updateOne(query, update, options);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.badRequest.unknown, 'Bad Request', e),
      );
    }

    if (!result)
      return Promise.reject(new AppError(errorTypes.notFound, this.modelName));

    return result;
  };

  schema.statics.findByIdAndUpdateDoc = async function (
    req,
    id,
    update,
    options = {},
  ) {
    pluginHelper.runUpdateSetup(update, options);

    let document;

    try {
      await pluginHelper.findDocumentsToValidateOver(
        this,
        req,
        { _id: id },
        update,
      );
      document = await this.findByIdAndUpdate(id, update, options);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.notFound, this.modelName, e),
      );
    }

    if (!document)
      return Promise.reject(new AppError(errorTypes.notFound, this.modelName));
    return document;
  };

  schema.statics.findOneAndUpdateDoc = async function (
    req,
    query,
    update,
    options = {},
  ) {
    pluginHelper.runUpdateSetup(update, options);

    try {
      await pluginHelper.findDocumentsToValidateOver(this, req, query, update);
      return await this.findOneAndUpdate(query, data, options);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.notFound, this.modelName, e),
      );
    }
  };

  schema.statics.findDoc = async function (
    req,
    query = {},
    options = {},
    fieldsToPopulate = [],
    selection = undefined,
    sort = {},
    skip = undefined,
    limit = undefined,
  ) {
    try {
      return await this.find(query, selection, options)
        .populate(fieldsToPopulate)
        .sort(sort)
        .skip(skip)
        .limit(limit);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.notFound, this.modelName, e),
      );
    }
  };

  schema.statics.findOneDoc = async function (
    req,
    query = {},
    options = {},
    fieldsToPopulate = [],
    selection = undefined,
    sort = {},
  ) {
    try {
      return await this.findOne(query, selection, options)
        .populate(fieldsToPopulate)
        .sort(sort);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.notFound, this.modelName, e),
      );
    }
  };

  schema.statics.findByIdDoc = async function (
    req,
    id,
    options = {},
    fieldsToPopulate = [],
    selection = undefined,
  ) {
    try {
      return await this.findById(id, selection, options).populate(
        fieldsToPopulate,
      );
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.notFound, this.modelName, e),
      );
    }
  };

  schema.statics.findOneAndRemoveDoc = async function (req, query) {
    try {
      let document = await this.findOne(query);
      if (!document)
        return Promise.reject(
          new AppError(errorTypes.notFound, this.modelName),
        );
      return await this.findOneAndRemove(query);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.notFound, this.modelName, e),
      );
    }
  };

  schema.statics.findByIdAndRemoveDoc = async function (req, id) {
    try {
      let document = await this.findById(id);

      if (!document)
        return Promise.reject(
          new AppError(errorTypes.notFound, this.modelName),
        );

      return await this.findByIdAndRemove(id);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.notFound, this.modelName, e),
      );
    }
  };

  schema.statics.populateDoc = async function (
    req,
    document,
    fieldsToPopulate,
  ) {
    try {
      return await this.populate(document, fieldsToPopulate);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.internalServerError, this.modelName, e),
      );
    }
  };

  schema.statics.countDoc = async function (req, query = {}) {
    try {
      return await this.countDocuments(query);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.internalServerError, this.modelName, e),
      );
    }
  };

  schema.statics.removeDoc = async function (req, query) {
    try {
      return await this.deleteOne(query);
    } catch (e) {
      return Promise.reject(
        new AppError(errorTypes.internalServerError, this.modelName, e),
      );
    }
  };

  schema.statics.deleteManyDoc = async function (req, query) {
    try {
      return await this.deleteMany(query);
    } catch (e) {
      return Promise.reject(
        new AppError(
          errorTypes.internalServerError,
          `Could not delete - ${this.modelName}`,
          e,
        ),
      );
    }
  };

  schema.statics.saveDoc = async function (req, doc) {
    if (doc.constructor.name !== 'model') {
      return Promise.reject(
        new AppError(errorTypes.internalServerError, 'Invalid document'),
      );
    }

    try {
      return await doc.save();
    } catch (e) {
      return Promise.reject(
        new AppError(
          errorTypes.badRequest.unknown,
          `Failed to save ${this.modelName}`,
          e,
        ),
      );
    }
  };
};
