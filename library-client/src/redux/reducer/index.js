import { combineReducers } from '@reduxjs/toolkit';
import dialogReducer from 'redux/slices/dialog.slice';

export default combineReducers({
  dialog: dialogReducer,
});
