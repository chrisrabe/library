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
      <ImageContainer>
        {isOptionsVisible && (
          <OptionsContainer>
            <OptionsList options={options} />
          </OptionsContainer>
        )}
        <StyledTooltip title="Click to interact with librarian" placement="top">
          <LibrarianImage
            src={Librarian}
            alt="Librarian"
            onClick={() => setIsOptionsVisible(!isOptionsVisible)}
          />
        </StyledTooltip>
      </ImageContainer>
    </Container>
  );
};

export default LibrarianPanel;
