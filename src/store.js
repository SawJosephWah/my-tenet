import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlices';
import sidebarToggleReducer from './slices/sidebarToggleSlice'
import detailsToggleReducer from './slices/detailsToggleSlice';
import homeCardActiveInactive from './slices/homeCardActiveInactive';
import menuActiveInactive from './slices/menuActiveInactive';
import teacherHome from './slices/teacherHome';
import teacherCourse from './slices/teacherCourse';

const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebarToggle: sidebarToggleReducer,
        detailsToggle: detailsToggleReducer,
        detailsToggle: detailsToggleReducer,
        homeCardActive: homeCardActiveInactive,
        teacherHome: teacherHome,
        menuActive: menuActiveInactive,
        teacherCourse: teacherCourse,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;