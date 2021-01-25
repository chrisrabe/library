import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { DialogActions } from '@material-ui/core';
import { StyledDialog } from './styles';

const Dialog = ({ isOpen, setIsOpen, content, actions }) => {
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <StyledDialog
      open={isOpen}
      onClose={handleClose}
      classes={{ paper: 'dialog-paper', paperWidthSm: 'paper-width-sm' }}
    >
      {content}
      <DialogActions>{actions}</DialogActions>
    </StyledDialog>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  content: PropTypes.node,
  actions: PropTypes.node,
};

export default Dialog;
