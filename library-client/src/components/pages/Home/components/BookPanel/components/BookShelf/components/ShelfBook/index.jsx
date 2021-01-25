import React, { useCallback, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import colors from 'utils/colors';
import BookDetails from 'components/pages/Home/components/BookDetails';
import { Container, StyledButton } from './styles';

const ShelfBook = ({ setData, setIsOpen }) => {
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
    const data = {
      content: <BookDetails color={color} />,
      actions: <StyledButton>Update book</StyledButton>,
    };
    setData(data);
    setIsOpen(true);
  }, [setData, setIsOpen, color]);

  return <Container offset={offset} color={color} onClick={handleClick} />;
};

ShelfBook.propTypes = {
  setData: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default ShelfBook;
