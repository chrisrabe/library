import React from 'react';
import BookShelf from './components/BookShelf';
import ShelfNavigation from './components/ShelfNavigation';
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
