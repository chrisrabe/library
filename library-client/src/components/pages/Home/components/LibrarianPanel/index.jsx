import React, { useState } from 'react';
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

const options = ['List all books', 'Find book', 'Add a new book'];

const LibrarianPanel = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
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
        <StyledTooltip title="Hello! I'm Arthuro. How can I help?" placement="top">
          <LibrarianImage src={Librarian} alt="Librarian" />
        </StyledTooltip>
      </ImageContainer>
    </Container>
  );
};

export default LibrarianPanel;
