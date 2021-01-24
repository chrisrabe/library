import { keyframes } from 'styled-components';

export const getPulsateFrames = (fromScale, toScale) => keyframes`
  from {
    transform: scale(${fromScale});
  }

  to {
    transform: scale(${toScale});
  }
`;
