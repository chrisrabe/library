const mongoose = require('mongoose');
const moment = require('moment');
const logger = require('../logger');

const dbConfig = {
  DATABASE_ADDRESS: process.env.DATABASE_ADDRESS,
};

const mongooseOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

exports.connect = () => {
  let retriesCount = 0;

  /**
   * Connects to the database
   */
  const mongooseConnect = () => {
    const address = `${dbConfig.DATABASE_ADDRESS}/lib-db`;
    const curDate = moment().format();
    mongoose
      .connect(address, mongooseOptions)
      .then(async () => {
        logger.info(`Mongoose connected - ${curDate}`);
      })
      .catch(err => {
        logger.error(`Mongoose connection error - ${curDate}`);
        logger.error(err.message);
        if (retriesCount <= 5) {
          retriesCount++;
          setTimeout(() => {
            mongooseConnect();
          }, 5000);
        } else {
          logger.error(`Terminating - could not connect to Mongo - ${curDate}`);
          process.exit(0);
        }
      });
  };
  // connect
  mongooseConnect();

  mongoose.connection.on('disconnected', () => {
    const date = moment().format();
    logger.info(`Mongoose connection disconnected - ${date}`);
  });
  mongoose.connection.on('reconnected', () => {
    const date = moment().format();
    logger.info(`Mongoose reconnected - ${date}`);
  });
  mongoose.connection.on('connecting', () => {
    const date = moment().format();
    logger.info(`Mongoose connecting - ${date}`);
  });
  mongoose.connection.on('disconnecting', () => {
    const date = moment().format();
    logger.info(`Mongoose disconnecting - ${date}`);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      const date = moment().format();
      logger.info(
        `Mongoose default connection disconnected through app termination - ${date}`,
      );
      process.exit(0);
    });
  });
};
