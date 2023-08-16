import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggle: false
};

const sidebarToggleSlice = createSlice({
  name: 'sidebarToggle',
  initialState,
  reducers: {
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { setToggle } = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;