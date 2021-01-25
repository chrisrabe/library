import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@material-ui/core';
import styled from 'styled-components';
import { fadeIn, getDelayTemplate, getPulsateFrames } from 'utils/keyframes';
import colors from 'utils/colors';

const pulsate = getPulsateFrames(1, 1.2);

const OptionsList = ({ options, isAnimated }) => {
  const getAnimations = () => {
    let str = '';
    for (let i = 0; i < options.length; i++) {
      str += getDelayTemplate(i, 0.25);
    }
    return str;
  };

  const StyledListItem = isAnimated
    ? styled(ListItem)`
        background-color: ${colors.light};
        margin: 5px 0;
        border-radius: 10px;
        box-shadow: 0 5px 4px rgba(0, 0, 0, 0.25);
        animation: ${fadeIn} 0.5s linear;
        animation-fill-mode: both;
        :hover {
          animation: ${pulsate} 800ms ease-in infinite alternate;
          background-color: ${(props) => props.theme.palette.secondary.main};
        }
        ${getAnimations()}
      `
    : styled(ListItem)`
        background-color: ${colors.light};
        margin: 5px 0;
        border-radius: 10px;
        box-shadow: 0 5px 4px rgba(0, 0, 0, 0.25);
      `;

  return (
    <List>
      {options.map((option, index) => (
        <StyledListItem
          key={`option-${index}`}
          button
          onClick={() => option.onClick(option.value)}
        >
          {option.text}
        </StyledListItem>
      ))}
    </List>
  );
};

OptionsList.propTypes = {
  options: PropTypes.array.isRequired,
  isAnimated: PropTypes.bool,
};

OptionsList.defaultProps = {
  isAnimated: true,
};

export default OptionsList;
