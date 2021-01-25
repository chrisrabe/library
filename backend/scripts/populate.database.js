const axios = require('axios');
const rawSample = require('./books.json');

const getAuthorData = rawData => {
  const names = rawData.split(' ');
  const firstName = names[0];
  const lastName = names.slice(1, names.length).join(' ');
  return {
    firstName,
    lastName,
  };
};

const getDatabaseData = (authors, books) => {
  const dbData = [];
  for (let i = 0; i < authors.length; i++) {
    const author = getAuthorData(authors[i]);
    const booksByAuthor = books.filter(book => book.author === i);
    dbData.push({
      author,
      books: booksByAuthor,
    });
  }
  return dbData;
};

const getConvertedData = () => {
  const authors = [];
  const books = [];
  for (const item of rawSample) {
    const author = item.authors[0];
    if (!authors.includes(author)) {
      authors.push(author);
    }
    const book = {
      name: item.title,
      isbn: item.isbn,
      author: authors.indexOf(author),
    };
    books.push(book);
  }
  return {
    authors,
    books,
  };
};

const parsedData = getConvertedData();
const databaseData = getDatabaseData(parsedData.authors, parsedData.books);

const SERVER_URL = 'http://localhost:8080';
const API_ENDPOINT = `${SERVER_URL}/api/v1`;

const postDatabaseData = async data => {
  try {
    const { data: authorData } = await axios.post(
      `${API_ENDPOINT}/authors`,
      data.author,
    );
    const authorId = authorData.author.id;
    for (const book of data.books) {
      book.author = authorId;
      await axios.post(`${API_ENDPOINT}/books`, book);
    }
    return 'Success';
  } catch (e) {
    return 'Error';
  }
};

let dbIndex = 0;
let successCount = 0;

// throttled push
const ref = setInterval(() => {
  if (dbIndex < databaseData.length) {
    const data = databaseData[dbIndex];
    postDatabaseData(data).then(res => {
      console.log(res);
      successCount++;
    });
    dbIndex++;
  } else {
    console.log('Successful push', successCount);
    clearInterval(ref);
  }
}, 100);
