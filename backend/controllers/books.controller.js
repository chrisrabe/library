const BookModel = require('../model/book.model');

exports.list = async req => {
  const query = {};
  return BookModel.findDoc(req, query);
};

exports.details = async req => {
  const { id } = req.params;
  return BookModel.findByIdDoc(req, id);
};

exports.create = async req => {
  const { name, isbn, author } = req.body;
  return BookModel.createDoc(req, {
    name,
    isbn,
    author,
  });
};

exports.edit = async req => {
  const { id } = req.params;
  const { name, isbn, author } = req.body;
  const update = {
    $set: {
      name,
      isbn,
      author,
    },
  };
  return BookModel.findByIdAndUpdateDoc(req, id, update);
};
