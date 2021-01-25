import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import ShelfRow from './components/ShelfRow';

const BookShelf = ({ books, currentPage }) => {
  const [rows, setRows] = useState(new Array(4).fill([]));

  useEffect(() => {
    const booksPerShelf = 160; // 40 books in 4 rows
    const min = currentPage * booksPerShelf;
    const max = (currentPage + 1) * booksPerShelf;
    const bookSubset = books.slice(min, max);
    // separate into rows
    const row1 = bookSubset.slice(0, 40);
    const row2 = bookSubset.slice(40, 80);
    const row3 = bookSubset.slice(80, 120);
    const row4 = bookSubset.slice(120, 160);
    const newRows = [row1, row2, row3, row4];
    setRows(newRows);
  }, [books, setRows, currentPage]);

  return (
    <Container>
      {rows.map((rowBooks, index) => (
        <ShelfRow key={`shelf-${index}`} books={rowBooks} />
      ))}
    </Container>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default BookShelf;
