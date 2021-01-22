const modelFactory = require('../_util/database/factories/db.model.factory');

const schemaName = 'Author';

const model = modelFactory.generate(schemaName, {
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
});

module.exports = model;
