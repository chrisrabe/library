import React from 'react';
import PropTypes from 'prop-types';
import { Container, BookContainer, LabelContainer } from './styles';
import ShelfBook from '../ShelfBook/container';

const ShelfRow = ({ books }) => (
  <Container>
    <BookContainer>
      {books.map((item, index) => (
        <ShelfBook key={`${item}-item-${index}`} book={item} />
      ))}
    </BookContainer>
    <LabelContainer />
  </Container>
);

ShelfRow.propTypes = {
  books: PropTypes.array.isRequired,
};

export default ShelfRow;
