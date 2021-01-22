const AuthorModel = require('../model/author.model');

exports.list = async req => {
  const query = {};
  return AuthorModel.findDoc(req, query);
};

exports.details = async req => {
  const { id } = req.params;
  return AuthorModel.findByIdDoc(req, id);
};

exports.create = async req => {
  const { firstName, lastName } = req.body;
  return AuthorModel.createDoc(req, {
    first_name: firstName,
    last_name: lastName,
  });
};

exports.edit = async req => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  const update = {
    $set: {
      first_name: firstName,
      last_name: lastName,
    },
  };
  return AuthorModel.findByIdAndUpdateDoc(req, id, update);
};
