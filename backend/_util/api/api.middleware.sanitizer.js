const sanitize = value => {
  if (value instanceof Object || typeof value === 'object') {
    for (let key in value) {
      if (value[key] instanceof Object) {
        sanitize(value[key]);
      } else if (/^\$/.test(key) || /^\$/.test(value[key])) {
        delete value[key];
      }
    }
  }
  return value;
};

const sanitizeMiddleware = (req, res, next) => {
  req.params = sanitize(req.params);
  req.query = sanitize(req.query);
  req.body = sanitize(req.body);

  next();
};

module.exports = sanitizeMiddleware;
