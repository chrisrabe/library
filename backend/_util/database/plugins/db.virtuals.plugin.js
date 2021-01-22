module.exports = schema => {
  // Duplicate the ID field
  schema.virtual('id').get(function () {
    if (this._id) {
      return this._id.toHexString();
    }
    return undefined;
  });

  // Ensure virtual fields are serialised
  schema.set('toJSON', {
    virtuals: true,
  });

  schema.options.toJSON.transform = function (doc, ret) {
    // remove the _id, _v and password of every document before returning result
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  };
};
