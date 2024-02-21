import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/sigupslice/sigupslice';
import googleReducer from './slices/googleSlice/googleSlice';
import loginReducer from './slices/loginslice/loginSlice';
import resetpasswordReducer from './slices/resetpasswordSlice/resetpasswordSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    Googlesignup: googleReducer,
    login: loginReducer,
    resetpassword: resetpasswordReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
