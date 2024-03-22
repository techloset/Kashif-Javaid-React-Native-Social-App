import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authslice/sigupslice';
import googleReducer from './slices/authslice/googleslice';
import loginReducer from './slices/authslice/loginslice';
import resetpasswordReducer from './slices/authslice/resetpasswordslice';
import createpostReducer from './slices/createslice/createslice';
import fetchPostReducer from './slices/homeslice/homeslice';
import owndetailprofileReducer from './slices/profileslice/owndetailprofileslice';
import editprofileReducer from './slices/profileslice/usereditprofileslice';
import updateReducer from './slices/profileslice/usereditprofileslice';
import updateprofileimageReducer from './slices/profileslice/profileimageslice';
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
