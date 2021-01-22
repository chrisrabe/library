const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

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

module.exports = router;
