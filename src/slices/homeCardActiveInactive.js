import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  index: null
};

const homeCardActiveInactive = createSlice({
  name: 'homeCardActiveInactive',
  initialState,
  reducers: {
    setHomeCardActive: (state, active) => {
      state.index = active.payload;
    },
  },
});

export const { setHomeCardActive } = homeCardActiveInactive.actions;

export default homeCardActiveInactive.reducer;