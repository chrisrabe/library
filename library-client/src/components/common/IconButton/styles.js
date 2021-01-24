import { IconButton } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import colors from 'theme/colors';

const grow = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
`;

export const StyledIconButton = styled(IconButton)`
  color: ${(props) => props.theme.palette.text.primary};
  background-color: ${(props) => props.theme.palette.secondary.main};
  margin: 0px 10px;

  :hover {
    animation: ${grow} 800ms ease-in infinite alternate;
    background-color: ${colors.darkAccent};
  }
`;
