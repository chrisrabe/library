// Before starting the test,
// please ensure to run the start-dbs.sh script

const mongoose = require('mongoose');
const expect = require('chai').expect;
const { TEST_DB_URL } = require('./constants');

const AuthorModel = require('../model/author.model');

describe('Author tests', () => {
  before(done => {
    mongoose.connect(TEST_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('We are connected to test database!');
      done();
    });
  });

  it('should create a new author', async () => {
    const mockData = {
      first_name: 'Chris',
      last_name: 'Rabe',
    };
    const doc = await AuthorModel.createDoc(undefined, mockData);
    expect(doc.first_name).to.equal('Chris');
    expect(doc.last_name).to.equal('Rabe');
  });

  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
