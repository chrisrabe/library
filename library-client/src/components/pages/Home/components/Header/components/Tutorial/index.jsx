import React from 'react';
import styled from 'styled-components';
import colors from 'utils/colors';

const Container = styled.div`
  background-color: ${colors.light};
  padding: 20px;
  width: 500px;
  font-size: 20px;
`;

const Tutorial = () => (
  <Container>
    A simple web application for storing information about your books. You can
    interact with the librarian or the bookshelf. Click on any book in the shelf
    to view details. Hover your mouse above librarian to see interaction
    options.
  </Container>
);

export default Tutorial;
