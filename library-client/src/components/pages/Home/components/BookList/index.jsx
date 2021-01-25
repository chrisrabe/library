import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import OptionsList from 'components/common/OptionsList';
import BookDetails from 'components/pages/Home/components/BookDetails/container';
import { getBookColor } from 'utils/colors';
import FormRequest from 'components/pages/Home/components/FormRequest/container';
import { StyledButton } from 'components/pages/Home/components/BookPanel/components/BookShelf/components/ShelfBook/styles';
import { setIsOpen } from 'redux/slices/dialog.slice';
import { Container } from './styles';

const BookList = ({ books, setData, fetchBookDetails }) => {
  const handleUpdate = useCallback(() => {
    const data = {
      content: <FormRequest headingText="Book Update Request" />,
    };
    setData(data);
  }, [setData]);

  const options = useMemo(
    () => books.map((book) => ({
      text: book.name,
      onClick: (value) => {
        fetchBookDetails(value.id);
        const bookColor = getBookColor();
        const data = {
          content: <BookDetails color={bookColor} />,
          actions: (
            <StyledButton onClick={handleUpdate}>Update book</StyledButton>
          ),
        };
        setData(data);
        setIsOpen(true);
      },
      value: book,
    })),
    [books, handleUpdate],
  );
  return (
    <Container>
      <OptionsList options={options} isAnimated={false} />
    </Container>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  fetchBookDetails: PropTypes.func.isRequired,
};

export default BookList;
