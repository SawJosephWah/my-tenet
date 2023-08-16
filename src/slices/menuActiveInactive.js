import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  index: null
};

const menuActiveInactive = createSlice({
  name: 'menuActiveInactive',
  initialState,
  reducers: {
    setMenuActive: (state, active) => {
      state.index = active.payload;
    },
  },
});

export const { setMenuActive } = menuActiveInactive.actions;

export default menuActiveInactive.reducer;