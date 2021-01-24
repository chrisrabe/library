import React from 'react';
import { Container, BookContainer, LabelContainer } from './styles';
import ShelfBook from '../ShelfBook';

const ShelfRow = () => {
  const books = new Array(40).fill(1);
  return (
    <Container>
      <BookContainer>
        {books.map((item, index) => (
          <ShelfBook key={`${item}-item-${index}`} />
        ))}
      </BookContainer>
      <LabelContainer />
    </Container>
  );
};

export default ShelfRow;
