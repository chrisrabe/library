import React from 'react';
import IconButton from 'components/common/IconButton';
import { Help, MusicNote } from '@material-ui/icons';
import { Container } from './styles';

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
