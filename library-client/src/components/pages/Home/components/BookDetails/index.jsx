import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { DialogActions } from '@material-ui/core';
import FrontPage from './components/FrontPage';
import BackPage from './components/BackPage';
import { StyledDialog, BookPage, StyledButton } from './styles';

const BookDetails = ({ color, isOpen, setIsOpen }) => {
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <StyledDialog
      open={isOpen}
      onClose={handleClose}
      classes={{ paper: 'dialog-paper', paperWidthSm: 'paper-width-sm' }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <BookPage color={color}>
          <FrontPage
            title="The little prince"
            author="Antoine de Saint-Exupery"
          />
        </BookPage>
        <BookPage color={color}>
          <BackPage />
        </BookPage>
      </div>
      <DialogActions>
        <StyledButton variant="contained">Update Book</StyledButton>
      </DialogActions>
    </StyledDialog>
  );
};

BookDetails.propTypes = {
  color: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default BookDetails;
