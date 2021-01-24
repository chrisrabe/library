import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import colors from 'utils/colors';
import { getPulsateFrames } from 'utils/keyframes';

const pulsate = getPulsateFrames(1, 1.02);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const SignText = styled(Typography)`
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${colors.light};
`;

export const ImageContainer = styled.div`
  margin-top: 10%;
`;

export const LibrarianImage = styled.img`
  :hover {
    cursor: pointer;
    animation: ${pulsate} 800ms ease-in infinite alternate;
  }
`;
