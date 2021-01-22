const AuthorModel = require('../model/author.model');

exports.list = async req => {
  const query = {};
  return AuthorModel.findDoc(req, query);
};
