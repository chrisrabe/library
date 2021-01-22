const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const joi = require('../../_util/api/api.object.schema');

const validationMiddleware = require('../../_util/api/api.param.validation');
const controller = require('../../controllers/author.controller');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      const authors = await controller.list(req);
      return res.ok({ authors });
    } catch (e) {
      return res.handleError(e, req);
    }
  }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    try {
      const author = await controller.details(req);
      return res.ok({ author });
    } catch (e) {
      return res.handleError(e, req);
    }
  }),
);

router.post(
  '/',
  validationMiddleware({
    body: {
      firstName: joi.string().required(),
      lastName: joi.string().required(),
    },
  }),
  asyncHandler(async (req, res) => {
    try {
      const author = await controller.create(req);
      return res.ok({ author });
    } catch (e) {
      return res.handleError(e, req);
    }
  }),
);

router.put(
  '/:id',
  validationMiddleware({
    body: {
      firstName: joi.string(),
      lastName: joi.string(),
    },
  }),
  asyncHandler(async (req, res) => {
    try {
      const author = await controller.edit(req);
      return res.ok({ author });
    } catch (e) {
      return res.handleError(e, req);
    }
  }),
);

module.exports = router;
