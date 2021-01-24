import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@material-ui/core';
import styled from 'styled-components';
import { fadeIn, getDelayTemplate, getPulsateFrames } from 'utils/keyframes';
import colors from 'utils/colors';

const pulsate = getPulsateFrames(1, 1.2);

const OptionsList = ({ options }) => {
  const getAnimations = useCallback(() => {
    let str = '';
    for (let i = 0; i < options.length; i++) {
      str += getDelayTemplate(i, 0.25);
    }
    return str;
  }, [options]);

  const StyledListItem = useMemo(
    () => styled(ListItem)`
      background-color: ${colors.light};
      animation: ${fadeIn} 0.5s linear;
      animation-fill-mode: both;
      margin: 5px 0;
      border-radius: 10px;
      box-shadow: 0 5px 4px rgba(0, 0, 0, 0.25);
      :hover {
        animation: ${pulsate} 800ms ease-in infinite alternate;
        background-color: ${(props) => props.theme.palette.secondary.main};
      }
      ${getAnimations()}
    `,
    [getAnimations],
  );

  return (
    <List>
      {options.map((option, index) => (
        <StyledListItem key={`option-${index}`} button>
          {option}
        </StyledListItem>
      ))}
    </List>
  );
};

OptionsList.propTypes = {
  options: PropTypes.array.isRequired,
};

export default OptionsList;
