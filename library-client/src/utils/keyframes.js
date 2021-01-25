import { keyframes } from 'styled-components';

export const getPulsateFrames = (fromScale, toScale) => keyframes`
  from {
    transform: scale(${fromScale});
  }

  to {
    transform: scale(${toScale});
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: 100%
  }
  75% {
    opacity: 0.5;
    top: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const getDelayTemplate = (i, duration) => `
    &:nth-child(${i + 1}) {
      animation-delay: ${duration * i}s;
    }
`;
