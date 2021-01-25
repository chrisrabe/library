import { createSlice } from '@reduxjs/toolkit';
import { getBookDetails, getBookList } from 'api';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    selectedBook: undefined,
    books: [],
    currentPage: 0,
    isLoadingBooks: false,
    isLoadingDetails: false,
    error: undefined,
  },
  reducers: {
    fetchBooksStart(state) {
      state.isLoadingBooks = true;
    },
    fetchBookDetailsStart(state) {
      state.isLoadingDetails = true;
    },
    setError(state, action) {
      state.isLoadingBooks = false;
      state.isLoadingDetails = false;
      state.error = action.payload;
    },
    setSelectedBook(state, action) {
      state.selectedBook = action.payload;
      state.isLoadingDetails = false;
    },
    setBooks(state, action) {
      state.books = action.payload;
      state.isLoadingBooks = false;
    },
    addBook(state, action) {
      state.books.push(action.payload);
    },
    setBook(state, action) {
      const { id, data } = action.payload;
      const bookIdx = state.books.findIndex((book) => book.id === id);
      if (bookIdx >= 0) {
        state.books[bookIdx] = data;
      } else {
        state.books.push(data);
      }
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  setSelectedBook,
  addBook,
  setBook,
} = bookSlice.actions;

const {
  setBooks,
  fetchBooksStart,
  fetchBookDetailsStart,
  setError,
} = bookSlice.actions;

export const fetchBooks = () => async (dispatch) => {
  dispatch(fetchBooksStart());
  try {
    const data = await getBookList();
    dispatch(setBooks(data));
  } catch (e) {
    dispatch(setError(e));
  }
};

export const fetchBookDetails = (bookId) => async (dispatch) => {
  dispatch(fetchBookDetailsStart());
  try {
    const data = await getBookDetails(bookId);
    dispatch(setSelectedBook(data));
  } catch (e) {
    dispatch(setError(e));
  }
};

export default bookSlice.reducer;
