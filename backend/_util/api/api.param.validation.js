const joi = require('joi');
const errorTypes = require('../constants/error.types');
const AppError = require('./api.error');
const logger = require('../logger');

/**
 * Function for validating request parameters and body before executing
 * controller logic. This is used before the asyncHandler call. Used in
 * conjuction with the api.object.schema module.
 *
 * Usage Example:
 *
 * const joi = require('api.object.schema');
 *
 * router.post('/sample',
 *      validationMiddleware({
 *          body: {
 *              id: joi.objectId().required()
 *          }
 *      }),
 *      asyncHandler( async (req, res ...
 *
 * @param schema
 * @return {Function}
 */
const validationMiddleware = schema => (req, res, next) => {
  // Inner function for formatting a nice message to the client
  const parseValidationErrors = error => {
    try {
      const errorDetails = error.details[0];
      const paramName = errorDetails.context.key;
      const errorContext = errorDetails.context.value;
      const errorPath = errorDetails.path[0];

      if (errorDetails.type === 'any.required') {
        res.handleError(
          new AppError(errorTypes.badRequest.missingField, paramName),
          req,
        );
        return;
      } else if (errorDetails.type === 'any.allowOnly') {
        res.handleError(
          new AppError(
            errorTypes.badRequest.incorrectValue,
            `${errorPath}, ${errorContext}`,
          ),
          req,
        );
        return;
      }
      res.handleError(
        new AppError(errorTypes.badRequest.incorrectValue, paramName),
        req,
      );
    } catch (e) {
      logger.error(e);
      res.handleError(
        new AppError(errorTypes.badRequest.unknown, 'Bad request'),
        req,
      );
    }
  };

  let result;

  if (schema.params) {
    result = joi.validate(req.params, schema.params);
  }
  if (schema.body) {
    result = joi.validate(req.body, schema.body);
  }
  if (schema.query) {
    result = joi.validate(req.query, schema.query);
  }

  if (result && result.error) {
    parseValidationErrors(result.error);
    return;
  }

  next();
};

module.exports = validationMiddleware;
