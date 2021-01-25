import React from 'react';
import BookShelf from './components/BookShelf/container';
import ShelfNavigation from './components/ShelfNavigation/container';
import { Container, ShelfContainer, NavContainer } from './styles';

const BookPanel = () => (
  <Container>
    <ShelfContainer>
      <BookShelf />
    </ShelfContainer>
    <NavContainer>
      <ShelfNavigation />
    </NavContainer>
  </Container>
);

export default BookPanel;
