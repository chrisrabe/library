import styled from 'styled-components';
import { Dialog } from '@material-ui/core';

export const StyledDialog = styled(Dialog)`
  width: 100%;
  .dialog-paper {
    background-color: transparent;
    box-shadow: none;
  }

  .paper-width-sm {
    max-width: none;
  }
`;
