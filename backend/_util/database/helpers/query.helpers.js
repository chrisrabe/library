const logger = require('../../logger');

/**
 * Deletes undefined values in the mongoose update object
 * @param {Object} update
 */
const deleteUndefinedUpdateValues = update => {
  const blacklist = ['_id', 'id'];
  let updateObj = update;
  if (update._doc) updateObj = update._doc;
  if (updateObj.constructor.name !== 'ObjectID') {
    for (const key in updateObj) {
      if (Object.hasOwnProperty.call(updateObj, key)) {
        // Do not check through mongoose keys, only the update variables.
        if (
          blacklist.includes(key) ||
          updateObj[key] === null ||
          (Array.isArray(updateObj) && isNaN(key))
        ) {
          continue;
        }
        if (typeof updateObj[key] === 'object') {
          deleteUndefinedUpdateValues(updateObj[key]);
        } else if (updateObj[key] === undefined) {
          delete updateObj[key];
        }
      }
    }
  }
};

/**
 * Converts the update object to a $set query.
 * @param {Object} update
 */
const addUpdateToSet = update => {
  if (!Object.hasOwnProperty.call(update, '$set')) {
    update.$set = {};
  }
  for (const key in update) {
    if (
      Object.hasOwnProperty.call(update, key) &&
      key &&
      !key.startsWith('$')
    ) {
      if (update[key] !== undefined) {
        update.$set[key] = update[key];
        delete update[key];
      }
    }
  }
};

/**
 * Sets the default update options.
 * @param {Object} options
 */
const setDefaultUpdateOptions = options => {
  if (options.runValidators !== false) {
    options.runValidators = true;
  }
  options.new = true;
};

/**
 * Validates each document.
 * @param {object} update
 * @param {Array} docs
 * @return {Promise<void>}
 */
const validateDocument = async (update, docs) => {
  for (const doc of docs) {
    let data = update;
    if (update.$set !== undefined) {
      data = update.$set;
    }
    await doc.merge(data);
    await doc.validate();
  }
};

/**
 * Find documents to force validation on.
 * @param {any} model
 * @param {object} req
 * @param {object} query
 * @param {object} data
 * @return {Promise<void>}
 */
exports.findDocumentsToValidateOver = async (model, req, query, data) => {
  let docs = await model.findDoc(req, query);

  if (docs.length > 0) {
    await validateDocument(data, docs);
  } else {
    let doc;
    try {
      doc = new model(query);
      await validateDocument(data, [doc]);
    } catch (e) {
      if (e.name === 'ValidationError') {
        logger.error(
          `Cannot create document from ${model.modelName} model. Skipping...`,
        );
      } else if (e.constructor.name === 'AppError') {
        throw e;
      }
    }
  }
};

/**
 * Converts the update object into a query object.
 * Sets the default update options.
 * @param update
 * @param options
 */
exports.runUpdateSetup = (update, options) => {
  deleteUndefinedUpdateValues(update);
  addUpdateToSet(update);
  setDefaultUpdateOptions(options);
};
