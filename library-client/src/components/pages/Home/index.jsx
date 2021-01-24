import React from 'react';
import Librarian from 'assets/librarian.svg';
import styled from 'styled-components';
import Header from 'components/pages/Home/components/Header';

const Container = styled.div`
  height: 100%;
`;

const Home = () => (
  <Container>
    <Header />
    <div>
      <p>Something</p>
    </div>
    <div>
      <img src={Librarian} alt="Librarian" />
    </div>
  </Container>
);

export default Home;
