import React, { useCallback, useEffect, useState } from 'react';
import colors from 'utils/colors';
import { Container } from 'components/pages/Home/components/BookPanel/components/BookShelf/components/ShelfBook/styles';

const ShelfBook = () => {
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

  useEffect(() => {
    const yOffset = Math.random() * 20;
    const xOffset = Math.random() * 20;
    setOffset({ x: xOffset, y: yOffset });
    getColor();
  }, [setOffset, getColor]);

  return <Container offset={offset} color={color} />;
};

export default ShelfBook;
