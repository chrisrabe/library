const express = require('express');
const router = express.Router();

const authorRouter = require('./author.route');

router.use('/authors', authorRouter);

module.exports = router;
