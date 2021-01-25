import React, { useCallback, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'utils/colors';
import BookDetails from 'components/pages/Home/components/BookDetails/container';
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

const ShelfBook = ({ book, setData, setIsOpen, fetchBookDetails }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState(undefined);

  const getColor = useCallback(() => {
    const colorChance = Math.round(Math.random() * 100);
    if (colorChance >= 0 && colorChance < 25) {
      setColor(colors.light);
    } else if (colorChance >= 25 && colorChance < 50) {
      setColor(colors.darkAccent);
    } else if (colorChance >= 50 && colorChance < 75) {
      setColor(colors.primary);
    } else {
      setColor(colors.secondary);
    }
  }, [setColor]);

  useLayoutEffect(() => {
    const yOffset = Math.random() * 20;
    const xOffset = Math.random() * 20;
    setOffset({ x: xOffset, y: yOffset });
    getColor();
  }, [setOffset, getColor]);

  const handleClick = useCallback(() => {
    fetchBookDetails(book.id);
    const data = {
      content: <BookDetails color={color} />,
      actions: <StyledButton>Update book</StyledButton>,
    };
    setData(data);
    setIsOpen(true);
  }, [setData, setIsOpen, color, book]);

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
};
export default ShelfBook;
