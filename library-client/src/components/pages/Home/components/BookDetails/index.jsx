import React from 'react';
import PropTypes from 'prop-types';
import FrontPage from './components/FrontPage';
import BackPage from './components/BackPage';
import { Container, BookPage } from './styles';

const BookDetails = ({ color, selectedBook }) => {
  const details = selectedBook
    ? {
      author: `${selectedBook.author.first_name} ${selectedBook.author.last_name}`,
      name: selectedBook.name,
      isbn: `ISBN: ${selectedBook.isbn}`,
    }
    : {
      author: 'Loading author...',
      name: 'Loading title...',
      isbn: 'Loading isbn...',
    };
  return (
    <Container>
      <BookPage color={color}>
        <FrontPage title={details.name} author={details.author} />
      </BookPage>
      <BookPage color={color}>
        <BackPage isbn={details.isbn} />
      </BookPage>
    </Container>
  );
};

BookDetails.propTypes = {
  color: PropTypes.string.isRequired,
  selectedBook: PropTypes.object.isRequired,
};

export default BookDetails;
