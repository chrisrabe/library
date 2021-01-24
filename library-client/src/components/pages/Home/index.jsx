import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import BookPanel from './components/BookPanel';
import LibrarianPanel from './components/LibrarianPanel';

const Container = styled.div`
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 50px);
`;

const Home = () => (
  <Container>
    <Header />
    <Content>
      <BookPanel />
      <LibrarianPanel />
    </Content>
  </Container>
);

export default Home;
