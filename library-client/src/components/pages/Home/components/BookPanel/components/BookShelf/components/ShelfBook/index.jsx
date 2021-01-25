import React, { useCallback, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors, { getBookColor } from 'utils/colors';
import BookDetails from 'components/pages/Home/components/BookDetails/container';
import FormRequest from 'components/pages/Home/components/FormRequest/container';
import { updateBook } from 'api';
import { Container, StyledButton } from './styles';

const TitleText = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: -100%;
  font-size: 12px;
  text-align: center;
  background-color: ${colors.success};
  border-radius: 10px;
  padding: 10px;
`;

const ShelfBook = ({ book, setData, setIsOpen, fetchBookDetails, setBook }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState(undefined);

  const getColor = useCallback(() => {
    const bookColor = getBookColor();
    setColor(bookColor);
  }, [setColor]);

  useLayoutEffect(() => {
    const yOffset = Math.random() * 20;
    const xOffset = Math.random() * 20;
    setOffset({ x: xOffset, y: yOffset });
    getColor();
  }, [setOffset, getColor, book]);

  const handleUpdate = useCallback(() => {
    const onSubmit = (data, value) => {
      updateBook(data, value).then((res) => {
        setBook({ id: res.id, data: res });
        setIsOpen(false);
      });
    };
    const data = {
      content: (
        <FormRequest headingText="Book Update Request" onSubmit={onSubmit} />
      ),
    };
    setData(data);
  }, [setData, book, setIsOpen]);

  const handleClick = useCallback(() => {
    fetchBookDetails(book.id);
    const data = {
      content: <BookDetails color={color} />,
      actions: <StyledButton onClick={handleUpdate}>Update book</StyledButton>,
    };
    setData(data);
    setIsOpen(true);
  }, [setData, setIsOpen, color, book, handleUpdate]);

  return (
    <Container offset={offset} color={color} onClick={handleClick}>
      <TitleText>{book.name}</TitleText>
    </Container>
  );
};

ShelfBook.propTypes = {
  setData: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  fetchBookDetails: PropTypes.func.isRequired,
  setBook: PropTypes.func.isRequired,
};
export default ShelfBook;
