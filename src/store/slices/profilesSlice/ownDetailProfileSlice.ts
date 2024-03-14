import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {profileState} from '../../../../type';
import auth from '@react-native-firebase/auth';
import {Images} from '../../../constants/instance';

const initialState: profileState = {
  user: null,
  error: null,
  isLoading: false,
  data: [],
  setData: [],
};

export const userprofile = createAsyncThunk('profile', async () => {
  try {
    const currentUser = auth().currentUser;
    console.log('current user id', currentUser);

    if (!currentUser) {
      return [];
    }
    const userId = currentUser.uid;
    console.log('userId', userId);
    const response = await Images.where('userId', '==', userId).get();
    const userData = response.docs.map(doc => {
      const data = doc.data();
      const createdAt = data.createdAt ? data.createdAt.toMillis() : null;
      return {
        id: doc.id,
        ...doc.data(),
        createdAt: createdAt,
      };
    });
    return userData;
  } catch (error) {
    throw error;
  }
});

const owndetailprofileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userprofile.pending, state => {
        state.isLoading = true;
      })
      .addCase(userprofile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(userprofile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const {setData} = owndetailprofileSlice.actions;
export default owndetailprofileSlice.reducer;
