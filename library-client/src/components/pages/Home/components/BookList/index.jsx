import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books }) => {
  console.log(books);
  return <div>books</div>;
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
