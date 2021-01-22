const ERROR_TYPES = {
  badRequest: {
    unknown: 'badRequest',
    missingField: 'missingField',
    incorrectValue: 'incorrectValue',
  },
  notFound: 'notFound',
  internalServerError: 'internalServerError',
};

module.exports = ERROR_TYPES;
