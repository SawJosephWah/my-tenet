import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggle: false
};

const detailsToggleSlice = createSlice({
  name: 'detailsToggle',
  initialState,
  reducers: {
    setDetailsToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { setDetailsToggle } = detailsToggleSlice.actions;

export default detailsToggleSlice.reducer;