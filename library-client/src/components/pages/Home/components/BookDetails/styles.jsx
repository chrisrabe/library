import React from 'react';
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

export const BookPage = styled(({ color, ...rest }) => <div {...rest} />)`
  background-color: ${(props) => props.color};
  width: 400px;
  height: 700px;
  margin: 0 10px;
  padding: 10px;
`;
