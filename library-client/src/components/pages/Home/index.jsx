import React from 'react';
import Header from './components/Header';
import BookPanel from './components/BookPanel';
import LibrarianPanel from './components/LibrarianPanel';
import { Container, Content } from './styles';

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
