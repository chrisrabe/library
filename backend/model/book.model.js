const modelFactory = require('../_util/database/factories/db.model.factory');
const { Schema } = require('mongoose');

const schemaName = 'Book';

const model = modelFactory.generate(schemaName, {
  name: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = model;
