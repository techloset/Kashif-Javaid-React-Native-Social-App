import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {resetpasswordState} from '../../../../type';
import {firebase} from '@react-native-firebase/auth';
import {Alert} from 'react-native';
const initialState: resetpasswordState = {
  user: null,
  isLoading: false,
  error: null,
  email: '',
};
export const ResetPassword = createAsyncThunk(
  'resetpassword',
  async ({email}: {email: string}) => {
    try {
      if (!firebase?.auth()?.currentUser?.email) {
        throw new Error('');
      } else {
        await firebase.auth().sendPasswordResetEmail(email);
        Alert.alert('Please Set password in email account and again Login');
      }
    } catch (error) {
      throw error;
    }
  },
);
const resetpasswordSlice = createSlice({
  name: 'resetpassword',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(ResetPassword.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(ResetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(ResetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to reset password';
      });
  },
});

export default resetpasswordSlice.reducer;
