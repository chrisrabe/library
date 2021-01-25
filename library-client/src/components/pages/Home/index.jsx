import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'components/common/Dialog';
import Header from './components/Header';
import BookPanel from './components/BookPanel';
import LibrarianPanel from './components/LibrarianPanel';
import { Container, Content } from './styles';

const Home = ({ isOpen, setIsOpen, dialogData }) => (
  <Container>
    <Header />
    <Content>
      <BookPanel />
      <LibrarianPanel />
    </Content>
    <Dialog
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      content={dialogData.content}
      actions={dialogData.actions}
    />
  </Container>
);

Home.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  dialogData: PropTypes.object.isRequired,
};

export default Home;
