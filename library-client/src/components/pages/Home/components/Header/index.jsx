import React from 'react';
import IconButton from 'components/common/IconButton';
import { Help } from '@material-ui/icons';
import { Container } from './styles';

const Header = () => (
  <Container>
    <IconButton>
      <Help />
    </IconButton>
  </Container>
);

export default Header;
