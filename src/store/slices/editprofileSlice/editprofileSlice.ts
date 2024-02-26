import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {db} from '../../../config/Firebase';
import {Alert} from 'react-native';
import {EditprofileState} from '../../../../type';
const initialState: EditprofileState = {
  user: null,
  isLoading: false,
  error: null,
  data: {},
  name: '',
  username: '',
  website: '',
  bio: '',
  email: '',
  phone: '',
  gender: '',
};

const validatePhoneNumber = (phoneNumber: string): boolean => {
  return phoneNumber.length <= 11;
};

export const userupdateprofile = createAsyncThunk(
  'updateprofile',
  async (
    {
      name,
      username,
      website,
      bio,
      email,
      phone,
      gender,
    }: {
      name: string;
      username: string;
      website: string;
      bio: string;
      email: string;
      phone: string;
      gender: string;
    },
    thunkAPI,
  ) => {
    try {
      const user = auth().currentUser;
      if (!user) {
        throw new Error('User not authenticated.');
      }
      if (!validatePhoneNumber(phone)) {
        throw new Error(
          'Invalid phone number! Phone number must not exceed 11 digits.',
        );
      }

      const userId = user.uid;
      const userRef = db.collection('Users').doc(userId);
      await userRef.set(
        {
          userId,
          createdAt: new Date(),
          name,
          username,
          website,
          bio,
          email,
          phone,
          gender,
        },
        {merge: true},
      );
      Alert.alert('Profile updated!');
      return {name, username, website, bio, email, phone, gender};
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
const updateSlice = createSlice({
  name: 'updateprofile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(userupdateprofile.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userupdateprofile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.name = action.payload.name;
        state.username = action.payload.username;
        state.website = action.payload.website;
        state.bio = action.payload.bio;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
        state.gender = action.payload.gender;
      })
      .addCase(userupdateprofile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default updateSlice.reducer;
