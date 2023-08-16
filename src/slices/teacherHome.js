import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  index: null,
  toggle: false,
  teacherHomeDetails: null
};

const teacherHome = createSlice({
  name: 'homeCardActiveInactive',
  initialState,
  reducers: {
    setTeacherHomeCardActive: (state, active) => {
      state.index = active.payload;
    },
    setTeacherHomeCardToggle: (state) => {
      state.toggle = !state.toggle;
    },
    setTeacherHomeDetails: (state, active) => {
      state.teacherHomeDetails = active.payload;
    },
  },
});

export const { setTeacherHomeCardActive, setTeacherHomeCardToggle, setTeacherHomeDetails } = teacherHome.actions;

export default teacherHome.reducer;