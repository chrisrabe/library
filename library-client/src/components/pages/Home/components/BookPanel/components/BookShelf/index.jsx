import React from 'react';
import styled from 'styled-components';
import colors from 'utils/colors';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.dark};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const BookShelf = () => <Container />;

export default BookShelf;