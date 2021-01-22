const mongoose = require('mongoose');
const mongooseStamp = require('mongoose-stamp');
const mongooseMergePlugin = require('mongoose-merge-plugin');
const virtualsPlugin = require('../plugins/db.virtuals.plugin');
const queryPlugin = require('../plugins/db.query.plugin');

/**
 * Generates a new database model
 * @param {string} modelName
 * @param {object} schema
 * @param {boolean} disableTimestamps Optional
 * @param {function} callback Optional
 * @return {object} mongoose.model
 */
exports.generate = (
  modelName,
  schema,
  disableTimestamps = undefined,
  callback = undefined,
) => {
  const options = {};
  if (!disableTimestamps) {
    options.timestamps = true;
  }
  const modelSchema = mongoose.Schema(schema, options);
  if (!disableTimestamps) {
    // add this plugin for embedded schemas to make sure updatedAt is indeed updated
    modelSchema.plugin(mongooseStamp);
  }

  // add this plugin to make sure virtuals are correct
  modelSchema.plugin(virtualsPlugin);
  // add this plugin to expose the merge function
  modelSchema.plugin(mongooseMergePlugin);
  // add this plugin for custom model functions
  modelSchema.plugin(queryPlugin);

  if (callback !== undefined) {
    callback(modelSchema);
  }

  return mongoose.model(modelName, modelSchema);
};
