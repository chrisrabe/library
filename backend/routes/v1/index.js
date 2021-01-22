const express = require('express');
const router = express.Router();

const authorRouter = require('./author.route');
const bookRouter = require('./books.route');

router.use('/authors', authorRouter);
router.use('/books', bookRouter);

module.exports = router;
