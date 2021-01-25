import React from 'react';
import PropTypes from 'prop-types';
import { Container, TitleText, AuthorText } from './styles';

const FrontPage = ({ title, author }) => (
  <Container>
    <TitleText>{title}</TitleText>
    <AuthorText>{author}</AuthorText>
  </Container>
);

FrontPage.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default FrontPage;
