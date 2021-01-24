import React from 'react';
import PropTypes from 'prop-types';
import { StyledIconButton } from 'components/common/IconButton/styles';

const IconButton = ({ children, onClick }) => (
  <StyledIconButton onClick={onClick}>{children}</StyledIconButton>
);

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default IconButton;
