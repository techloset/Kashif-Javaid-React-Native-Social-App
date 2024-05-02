import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authslice/authslice';
import createpostReducer from './slices/createPostslice/createPostslice';
import fetchPostReducer from './slices/homeslice/homeslice';
import owndetailprofileReducer from './slices/profileslice/profileSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    addpost: createpostReducer,
    allPosts: fetchPostReducer,
    profile: owndetailprofileReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
