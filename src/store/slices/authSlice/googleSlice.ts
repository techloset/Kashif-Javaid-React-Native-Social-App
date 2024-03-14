import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Googletype} from '../../../../type';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {db} from '../../../config/Firebase';
import {profile, user} from '../../../constants/instance';
GoogleSignin.configure({
  webClientId: process.env.GOOGLE_CLIENT_ID,
});
const initialState: Googletype = {
  user: null,
  isLoading: false,
  error: null,
  username: '',
  email: '',
  password: '',
  userId: '',
};
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
    console.log(error);
    throw error;
  }
});

const googleSlice = createSlice({
  name: 'Googlesign',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GoogleSignIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GoogleSignIn.fulfilled, state => {
        state.isLoading = false;
      })

      .addCase(GoogleSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Google sign-in failed';
      });
  },
});

export default googleSlice.reducer;
