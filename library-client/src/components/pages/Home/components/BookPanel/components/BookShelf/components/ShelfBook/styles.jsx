import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import colors from 'utils/colors';
import { getPulsateFrames } from 'utils/keyframes';

const pulsate = getPulsateFrames(1, 1.5);
const buttonPulsate = getPulsateFrames(1, 1.05);

export const Container = styled(({ offset, color, ...rest }) => (
  <div {...rest} />
))`
  height: calc(100% - ${(props) => props.offset.y}px);
  width: ${(props) => 20 + props.offset.x}px;
  background-color: ${(props) => props.color};
  margin-right: 5px;
  :hover {
    animation: ${pulsate} 800ms ease-in infinite alternate;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${colors.light};
  animation: ${buttonPulsate} 800ms ease-in infinite alternate;

  :hover {
    background-color: ${colors.secondary};
  }
`;
