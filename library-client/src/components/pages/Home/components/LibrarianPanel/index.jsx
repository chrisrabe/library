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
import BookList from 'components/pages/Home/components/BookList/container';
import FormRequest from 'components/pages/Home/components/FormRequest/container';
import { postCreateBook } from 'api';

const LibrarianPanel = ({ setData, setIsOpen, setSelectedBook, addBook }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const options = [
    {
      text: 'List all books',
      onClick: () => {
        const data = {
          content: <BookList />,
        };
        setData(data);
        setIsOpen(true);
      },
    },
    {
      text: 'Add a new book',
      onClick: () => {
        const onSubmit = (data) => {
          postCreateBook(data).then((res) => {
            addBook(res);
            setIsOpen(false);
          });
        };
        const data = {
          content: (
            <FormRequest headingText="New Book Request" onSubmit={onSubmit} />
          ),
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
  setIsOpen: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setSelectedBook: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
};

export default LibrarianPanel;
