import React from 'react';
import PropTypes from 'prop-types';
import FrontPage from './components/FrontPage';
import BackPage from './components/BackPage';
import { Container, BookPage } from './styles';

const BookDetails = ({ color }) => (
  <Container>
    <BookPage color={color}>
      <FrontPage title="The little prince" author="Antoine de Saint-Exupery" />
    </BookPage>
    <BookPage color={color}>
      <BackPage isbn="ISBN: 23125-4141-2312" />
    </BookPage>
  </Container>
);

BookDetails.propTypes = {
  color: PropTypes.string.isRequired,
};

export default BookDetails;
