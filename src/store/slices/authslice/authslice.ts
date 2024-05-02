import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthState} from '../../../../type';
import {user, profile} from '../../../constants/instance';
import {firebase} from '@react-native-firebase/auth';
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

export const userlogin = createAsyncThunk(
  'Login',
  async ({email, password}: {email: string; password: string}) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      return user;
    } catch (error) {}
  },
);

export const GoogleSignIn = createAsyncThunk('googleSignIn', async () => {
  try {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    const {displayName, email, uid, photoURL} = userCredential.user || {};
    user.add({
      displayName: displayName || '',
      email: email || '',
      userId: uid || '',
    });
    profile.add({
      userId: uid || '',
      downloadURL: photoURL || '',
    });
    return userCredential.user;
  } catch (error) {
    throw error;
  }
});

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
    } catch (error) {}
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
      })

      .addCase(userlogin.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userlogin.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(userlogin.rejected, state => {
        state.isLoading = false;
      })

      .addCase(GoogleSignIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GoogleSignIn.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(GoogleSignIn.rejected, state => {
        state.isLoading = false;
      })

      .addCase(ResetPassword.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(ResetPassword.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(ResetPassword.rejected, state => {
        state.isLoading = false;
      });
  },
});
export const {setBadUsername, setBadEmail, setBadPassword, setBadConfirmPass} =
  authSlice.actions;
export default authSlice.reducer;
