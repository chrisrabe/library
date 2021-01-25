import { createSlice } from '@reduxjs/toolkit';

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    isOpen: false,
    data: {
      content: undefined,
      actions: undefined,
    },
  },
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setIsOpen, setData } = dialogSlice.actions;

export default dialogSlice.reducer;
