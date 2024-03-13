import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice/sigupslice';
import googleReducer from './slices/authSlice/googleSlice';
import loginReducer from './slices/authSlice/loginSlice';
import resetpasswordReducer from './slices/authSlice/resetpasswordSlice';
import createpostReducer from './slices/createSlice/createSlice';
import fetchPostReducer from './slices/homeSlice/homeSlice';
import owndetailprofileReducer from './slices/profilesSlice/ownDetailProfileSlice';
import editprofileReducer from './slices/profilesSlice/userEditprofileSlice';
import updateReducer from './slices/profilesSlice/userEditprofileSlice';
import updateprofileimageReducer from './slices/profilesSlice/profileImageSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    Googlesignup: googleReducer,
    login: loginReducer,
    resetpassword: resetpasswordReducer,
    addpost: createpostReducer,
    allPosts: fetchPostReducer,
    profile: owndetailprofileReducer,
    editprofile: editprofileReducer,
    updateprofile: updateReducer,
    updateImage: updateprofileimageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
