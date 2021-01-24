import React from 'react';
import styled from 'styled-components';
import IconButton from 'components/common/IconButton';
import { Help, MusicNote } from '@material-ui/icons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Header = () => (
  <Container>
    <IconButton>
      <Help />
    </IconButton>
    <IconButton>
      <MusicNote />
    </IconButton>
  </Container>
);

export default Header;
