const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const sanitizeMiddleware = require('./_util/api/api.middleware.sanitizer');
const registerResponseHandlers = require('./_util/api/api.response.handlers');
const corsOptions = require('./_util/cors.options');
const db = require('./_util/database/db.connection');

const app = express();

// connect to database
db.connect();

// middleware setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sanitizeMiddleware);
app.use(cors(corsOptions));

// register response handlers
registerResponseHandlers(express);

const apiRouter = require('./routes');
app.use('/api', apiRouter);

app.get('/*', (req, res) => {
  res.send('What are you trying to get? LOL');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((err, req, res) => {
  // render the error page
  res.status(err.status || 500);
  res.send('Not found');
});

module.exports = app;
