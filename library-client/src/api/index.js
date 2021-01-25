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
