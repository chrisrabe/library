const bunyan = require('bunyan');

// Extensible logger in-case monitoring / analytics to be added
const logger = bunyan.createLogger({
  name: 'lib-server',
  streams: [
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: 'error',
      stream: process.stdout,
    },
  ],
});

module.exports = logger;
