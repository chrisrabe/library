import React from 'react';
import styled from 'styled-components';
import IconButton from 'components/common/IconButton';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import BookShelf from './components/BookShelf';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 100%;
`;

const ShelfContainer = styled.div`
  width: 80%;
`;

const NavContainer = styled.div`
  width: 20%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BookPanel = () => (
  <Container>
    <ShelfContainer>
      <BookShelf />
    </ShelfContainer>
    <NavContainer>
      <ButtonContainer>
        <IconButton>
          <ArrowBack />
        </IconButton>
        <IconButton>
          <ArrowForward />
        </IconButton>
      </ButtonContainer>
    </NavContainer>
  </Container>
);

export default BookPanel;
