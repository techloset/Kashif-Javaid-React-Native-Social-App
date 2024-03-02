import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import auth from '@react-native-firebase/auth';
import {LoginState} from '../../../../type';

const initialState: LoginState = {
  user: null,
  isLoading: false,
  error: null,
  email: '',
  password: '',
};

export const userlogin = createAsyncThunk(
  'Login',
  async ({email, password}: {email: string; password: string}) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      console.log('User signed in:', user);
      return user;
    } catch (error) {}
  },
);

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(userlogin.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userlogin.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(userlogin.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default loginSlice.reducer;
