import { combineReducers } from '@reduxjs/toolkit';
import dialogReducer from 'redux/slices/dialog.slice';
import bookReducer from 'redux/slices/book.slice';

export default combineReducers({
  dialog: dialogReducer,
  book: bookReducer,
});
