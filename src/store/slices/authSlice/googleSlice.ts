import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Googletype} from '../../../../type';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {db} from '../../../config/Firebase';
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
    db.collection('Users').add({
      displayName: displayName || '',
      email: email || '',
      userId: uid || '',
    });
    db.collection('profile').add({
      userId: uid || '',
    });
    return userCredential.user;
  } catch (error) {
    console.error('Google sign-in error:', error);
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
