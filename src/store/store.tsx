import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice/sigupslice';
import googleReducer from './slices/authSlice/googleSlice';
import loginReducer from './slices/authSlice/loginSlice';
import resetpasswordReducer from './slices/authSlice/resetpasswordSlice';
import createpostReducer from './slices/createSlice/createSlice';
import fetchPostReducer from './slices/homeSlice/homeSlice';
import userprofileReducer from './slices/profilesSlice/profileSlice';
import editprofileReducer from './slices/profilesSlice/editprofileSlice';
import updateReducer from './slices/profilesSlice/editprofileSlice';
import updateprofileimageReducer from './slices/profilesSlice/profileImageSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    Googlesignup: googleReducer,
    login: loginReducer,
    resetpassword: resetpasswordReducer,
    addpost: createpostReducer,
    allPosts: fetchPostReducer,
    profile: userprofileReducer,
    editprofile: editprofileReducer,
    updateprofile: updateReducer,
    updateImage: updateprofileimageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
