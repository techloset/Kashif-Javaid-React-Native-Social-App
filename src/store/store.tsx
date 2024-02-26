import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/sigupslice/sigupslice';
import googleReducer from './slices/googleSlice/googleSlice';
import loginReducer from './slices/loginslice/loginSlice';
import resetpasswordReducer from './slices/resetpasswordSlice/resetpasswordSlice';
import createpostReducer from './slices/createSlice/createSlice';
import fetchPostReducer from './slices/homeSlice/homeSlice';
import userprofileReducer from './slices/profileslice/profileSlice';
import editprofileReducer from './slices/editprofileSlice/editprofileSlice';
import updateReducer from './slices/editprofileSlice/editprofileSlice';
import updateprofileimageReducer from './slices/profileImageSlice/profileImageSlice';
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
