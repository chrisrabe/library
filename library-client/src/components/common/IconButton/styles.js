import { IconButton } from '@material-ui/core';
import styled from 'styled-components';
import colors from 'utils/colors';
import { getPulsateFrames } from 'utils/keyframes';

const pulsate = getPulsateFrames(1, 1.2);

export const StyledIconButton = styled(IconButton)`
  color: ${(props) => props.theme.palette.text.primary};
  background-color: ${(props) => props.theme.palette.secondary.main};
  margin: 0px 10px;

  :hover {
    animation: ${pulsate} 800ms ease-in infinite alternate;
    background-color: ${colors.darkAccent};
  }
`;
