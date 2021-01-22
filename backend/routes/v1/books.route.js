const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const joi = require('../../_util/api/api.object.schema');

const validationMiddleware = require('../../_util/api/api.param.validation');
const controller = require('../../controllers/books.controller');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      const books = await controller.list(req);
      return res.ok({ books });
    } catch (e) {
      return res.handleError(e, req);
    }
  }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    try {
      const book = await controller.details(req);
      return res.ok({ book });
    } catch (e) {
      return res.handleError(e, req);
    }
  }),
);

router.post(
  '/',
  validationMiddleware({
    body: {
      name: joi.string().required(),
      isbn: joi.string().required(),
      author: joi.objectId().required(),
    },
  }),
  asyncHandler(async (req, res) => {
    try {
      const book = await controller.create(req);
      return res.ok({ book });
    } catch (e) {
      return res.handleError(e, req);
    }
  }),
);

router.put(
  '/:id',
  validationMiddleware({
    body: {
      name: joi.string(),
      isbn: joi.string(),
      author: joi.objectId(),
    },
  }),
  asyncHandler(async (req, res) => {
    try {
      const book = await controller.edit(req);
      return res.ok({ book });
    } catch (e) {
      return res.handleError(e, req);
    }
  }),
);

module.exports = router;
