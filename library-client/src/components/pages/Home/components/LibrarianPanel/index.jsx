import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Librarian from 'assets/librarian.svg';
import OptionsList from 'components/common/OptionsList';
import {
  Container,
  SignText,
  ImageContainer,
  LibrarianImage,
  OptionsContainer,
  StyledTooltip,
} from 'components/pages/Home/components/LibrarianPanel/styles';
import BookList from 'components/pages/Home/components/BookList';
import FormRequest from 'components/pages/Home/components/FormRequest';

const LibrarianPanel = ({ books, setData, setIsOpen, setSelectedBook }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const options = [
    {
      text: 'List all books',
      onClick: () => {
        const data = {
          content: <BookList books={books} />,
        };
        setData(data);
        setIsOpen(true);
      },
    },
    {
      text: 'Add a new book',
      onClick: () => {
        const data = {
          content: <FormRequest headingText="New Book Request" />,
        };
        setSelectedBook(undefined);
        setData(data);
        setIsOpen(true);
      },
    },
  ];

  return (
    <Container>
      <SignText variant="h2">Library</SignText>
      <ImageContainer
        onMouseEnter={() => setIsOptionsVisible(true)}
        onMouseLeave={() => setIsOptionsVisible(false)}
      >
        {isOptionsVisible && (
          <OptionsContainer>
            <OptionsList options={options} />
          </OptionsContainer>
        )}
        <StyledTooltip
          title="Hello! I'm Arthuro. How can I help?"
          placement="top"
        >
          <LibrarianImage src={Librarian} alt="Librarian" />
        </StyledTooltip>
      </ImageContainer>
    </Container>
  );
};

LibrarianPanel.propTypes = {
  books: PropTypes.array.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setSelectedBook: PropTypes.func.isRequired,
};

export default LibrarianPanel;
