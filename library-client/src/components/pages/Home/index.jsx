import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'components/common/Dialog';
import Header from './components/Header/container';
import BookPanel from './components/BookPanel';
import LibrarianPanel from './components/LibrarianPanel/container';
import { Container, Content } from './styles';

const Home = ({ isOpen, setIsOpen, dialogData, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
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
};

Home.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  dialogData: PropTypes.object.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default Home;
