import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTab: 1,
};

const teacherCourse = createSlice({
  name: 'teacherCourse',
  initialState,
  reducers: {
    setTeacherCourseTab: (state,payload) => {
      state.activeTab = payload.payload;
    },
  },
});

export const { setTeacherCourseTab } = teacherCourse.actions;

export default teacherCourse.reducer;