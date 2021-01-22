// Before starting the test,
// please ensure to run the start-dbs.sh script
// or a mongodb docker container is running locally

const mongoose = require('mongoose');
const expect = require('chai').expect;
const { TEST_DB_URL } = require('./constants');

const AuthorModel = require('../model/author.model');
const BookModel = require('../model/book.model');

describe('Database Tests', () => {
  let authorId = undefined;

  before(done => {
    mongoose.connect(TEST_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('We are connected to test database!');
      done();
    });
  });

  // Author Database tests

  describe('Author tests', () => {
    it('should fail to create an author with missing first name', async () => {
      const mockData = {
        last_name: 'Rabe',
      };
      try {
        const doc = await AuthorModel.createDoc(undefined, mockData);
        expect(doc).to.be.equal(undefined);
      } catch (e) {
        expect(e.errorType).to.equal('badRequest');
      }
    });

    it('should fail to create an author with missing last name', async () => {
      const mockData = {
        first_name: 'Chris',
      };
      try {
        const doc = await AuthorModel.createDoc(undefined, mockData);
        expect(doc).to.be.equal(undefined);
      } catch (e) {
        expect(e.errorType).to.equal('badRequest');
      }
    });

    it('should create a new author', async () => {
      const mockData = {
        first_name: 'Chris',
        last_name: 'Rabe',
      };
      const doc = await AuthorModel.createDoc(undefined, mockData);
      expect(doc.first_name).to.equal('Chris');
      expect(doc.last_name).to.equal('Rabe');
      authorId = doc._id;
    });

    it('should have one doc in the author list', async () => {
      const query = {};
      const list = await AuthorModel.findDoc(undefined, query);
      expect(list.length).to.be.equal(1);
      const item = list[0];
      expect(item).to.not.equal(undefined);
      if (item) {
        expect(item.first_name).to.equal('Chris');
        expect(item.last_name).to.equal('Rabe');
      }
    });

    it('should be able to update author', async () => {
      const update = {
        $set: {
          first_name: 'Brian',
        },
      };
      const author = await AuthorModel.findByIdAndUpdateDoc(
        undefined,
        authorId,
        update,
      );
      expect(author.first_name).to.be.equal('Brian');
      expect(author.last_name).to.be.equal('Rabe');
    });
  });

  describe('Book database tests', () => {
    let bookId = undefined;

    it('should successfully create a book', async () => {
      const mockData = {
        name: 'Random book',
        isbn: 'TEST_ISBN',
        author: authorId,
      };
      const doc = await BookModel.createDoc(undefined, mockData);
      expect(doc.name).to.equal('Random book');
      expect(doc.isbn).to.equal('TEST_ISBN');
      expect(doc.author).to.equal(authorId);
      bookId = doc._id;
    });

    it('should have one doc in the book list', async () => {
      const query = {};
      const list = await BookModel.findDoc(undefined, query);
      expect(list.length).to.be.equal(1);
      const item = list[0];
      expect(item).to.not.equal(undefined);
      if (item) {
        expect(item.name).to.equal('Random book');
        expect(item.isbn).to.equal('TEST_ISBN');
        expect(item.author.toString()).to.equal(authorId.toString());
      }
    });

    it('should display author details if retrieving book by id', async () => {
      const options = {};
      const fieldsToPopulate = ['author'];
      const doc = await BookModel.findByIdDoc(
        undefined,
        bookId,
        options,
        fieldsToPopulate,
      );
      expect(doc).to.not.equal(undefined);
      if (doc) {
        expect(doc.name).to.equal('Random book');
        expect(doc.isbn).to.equal('TEST_ISBN');
        expect(doc.author.toString()).to.not.equal(authorId.toString());
        expect(doc.author.first_name).to.be.equal('Brian');
        expect(doc.author.last_name).to.be.equal('Rabe');
      }
    });

    it('should be able to update book details', async () => {
      const update = {
        $set: {
          name: 'To Kill a Mocking Bird',
        },
      };
      const doc = await BookModel.findByIdAndUpdateDoc(
        undefined,
        bookId,
        update,
      );
      expect(doc.name).to.equal('To Kill a Mocking Bird');
      expect(doc.isbn).to.equal('TEST_ISBN');
      expect(doc.author.toString()).to.equal(authorId.toString());
    });
  });

  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
