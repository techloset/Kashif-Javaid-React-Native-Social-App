import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {db} from '../../../config/Firebase';
import {AuthState} from '../../../../type';
import {user} from '../../../constants/instance';
const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  badUsername: '',
  badEmail: '',
  badPassword: '',
  badConfirmPass: '',
  setuseName: '',
  setuseEmail: '',
  setusePassword: '',
  setuseConfirmPass: '',
};
export const SignUp = createAsyncThunk(
  'signup',
  async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
    confirmpass: string;
  }) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await user.add({username, email, password});
      await auth().currentUser?.updateProfile({displayName: username});
      Alert.alert('User account created & signed in!');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      } else {
      }
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setBadUsername: (state, action: PayloadAction<string>) => {
      state.badUsername = action.payload;
    },
    setBadEmail: (state, action: PayloadAction<string>) => {
      state.badEmail = action.payload;
    },
    setBadPassword: (state, action: PayloadAction<string>) => {
      state.badPassword = action.payload;
    },
    setBadConfirmPass: (state, action: PayloadAction<string>) => {
      state.badConfirmPass = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(SignUp.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(SignUp.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const {setBadUsername, setBadEmail, setBadPassword, setBadConfirmPass} =
  authSlice.actions;
export default authSlice.reducer;
