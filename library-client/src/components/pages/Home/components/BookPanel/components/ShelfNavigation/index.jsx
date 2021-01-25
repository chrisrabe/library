import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/common/IconButton';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { ButtonContainer } from './styles';

const ShelfNavigation = ({ books, currentPage, setCurrentPage }) => {
  // each shelf has 160 books
  const maxPages = useMemo(() => Math.floor(books.length / 160), [books]);

  const handleBack = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [setCurrentPage, currentPage]);

  const handleNext = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [setCurrentPage, currentPage]);

  return (
    <ButtonContainer>
      {currentPage > 0 && (
        <IconButton onClick={handleBack}>
          <ArrowBack />
        </IconButton>
      )}
      {currentPage < maxPages && (
        <IconButton onClick={handleNext}>
          <ArrowForward />
        </IconButton>
      )}
    </ButtonContainer>
  );
};

ShelfNavigation.propTypes = {
  books: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default ShelfNavigation;
