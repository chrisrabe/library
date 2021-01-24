import React from 'react';
import IconButton from 'components/common/IconButton';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { ButtonContainer } from './styles';

const ShelfNavigation = () => (
  <ButtonContainer>
    <IconButton>
      <ArrowBack />
    </IconButton>
    <IconButton>
      <ArrowForward />
    </IconButton>
  </ButtonContainer>
);

export default ShelfNavigation;
