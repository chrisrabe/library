import axios from 'axios';
import config from 'utils/config';

export const getBookList = async () => {
  const url = `${config.server.baseUrl}${config.server.api.v1}/books`;
  const { data } = await axios.get(url);
  return data.books;
};

export const getBookDetails = async (bookId) => {
  const url = `${config.server.baseUrl}${config.server.api.v1}/books/${bookId}`;
  const { data } = await axios.get(url);
  return data.book;
};

export const postCreateBook = async (data) => {
  const { name, isbn, firstname, lastname } = data;
  const authorUrl = `${config.server.baseUrl}${config.server.api.v1}/authors`;
  const bookUrl = `${config.server.baseUrl}${config.server.api.v1}/books`;
  // create new author
  const authorPayload = {
    firstName: firstname,
    lastName: lastname,
  };
  const { data: authorData } = await axios.post(authorUrl, authorPayload);
  const bookPayload = {
    name,
    isbn,
    author: authorData.author.id,
  };
  const { data: bookData } = await axios.post(bookUrl, bookPayload);
  return bookData.book;
};

export const updateBook = async (data, bookData) => {
  const { name, isbn, firstname, lastname } = data;
  const authorId = bookData.author.id;
  const bookId = bookData.id;
  const authorUrl = `${config.server.baseUrl}${config.server.api.v1}/authors/${authorId}`;
  const bookUrl = `${config.server.baseUrl}${config.server.api.v1}/books/${bookId}`;
  // update author
  const authorPayload = {
    firstName: firstname,
    lastName: lastname,
  };
  await axios.put(authorUrl, authorPayload);
  // update book
  const bookPayload = {
    name,
    isbn,
  };
  const { data: bookRes } = await axios.put(bookUrl, bookPayload);
  return bookRes.book;
};
