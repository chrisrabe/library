import React from 'react';
import { Container } from './styles';
import ShelfRow from './components/ShelfRow';

const BookShelf = () => (
  <Container>
    <ShelfRow />
    <ShelfRow />
    <ShelfRow />
    <ShelfRow />
  </Container>
);

export default BookShelf;
