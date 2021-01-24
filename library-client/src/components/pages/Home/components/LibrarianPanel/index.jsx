import React from 'react';
import Librarian from 'assets/librarian.svg';
import { Container, SignText, ImageContainer, LibrarianImage } from './styles';

const LibrarianPanel = () => (
  <Container>
    <SignText variant="h2">Library</SignText>
    <ImageContainer>
      <LibrarianImage src={Librarian} alt="Librarian" />
    </ImageContainer>
  </Container>
);

export default LibrarianPanel;
