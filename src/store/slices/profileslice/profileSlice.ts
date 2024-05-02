import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProfileTypes, UploadResult1, profileState} from '../../../../type';
import auth from '@react-native-firebase/auth';
import {Images} from '../../../constants/instance';
import {profile} from '../../../constants/instance';
import storage from '@react-native-firebase/storage';
import {users} from '../../../constants/instance';
import {Alert} from 'react-native';

const initialState: profileState = {
  user: null,
  error: null,
  isLoading: false,
  imageUrl: '',
  userId: '',
  name: '',
  username: '',
  website: '',
  bio: '',
  email: '',
  phone: '',
  gender: '',
  data: {},
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

export const updateUserImage = createAsyncThunk(
  'updateImage',
  async ({imageUri, userId}: {imageUri: string; userId: string}) => {
    try {
      if (!imageUri) {
        throw new Error('Please select all files');
      }

      const uploadTask = storage()
        .ref()
        .child(`/profile/${auth().currentUser?.uid}/${Date.now()}`)
        .putFile(imageUri);

      return new Promise<UploadResult1>((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          snapshot => {},
          error => {
            reject(error);
          },
          async () => {
            try {
              const downloadURL =
                await uploadTask.snapshot?.ref.getDownloadURL();
              if (downloadURL) {
                const userId = auth().currentUser?.uid;
                if (userId) {
                  const imageId = Date.now().toString();
                  await profile.doc(userId).set({
                    downloadURL,
                    userId,
                  });
                  resolve({success: true, imageUrl: downloadURL, userId});
                }
              }
            } catch (error) {}
          },
        );
      });
    } catch (error) {
      throw error;
    }
  },
);
export const userupdateprofile = createAsyncThunk(
  'updateprofile',
  async (userData: ProfileTypes, thunkAPI) => {
    try {
      const user = auth().currentUser;
      if (!user) {
        throw new Error('User not authenticated.');
      }

      const userId = user.uid;
      const userRef = users.doc(userId);
      await userRef.set(
        {
          userId,
          createdAt: new Date(),
          name: userData.name,
          username: userData.username,
          website: userData.website,
          bio: userData.bio,
          email: userData.email,
          phone: userData.phone,
          gender: userData.phone,
        },
        {merge: true},
      );
      Alert.alert('Profile updated!');
      return {userData};
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

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
      })
      .addCase(updateUserImage.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.imageUrl = action.payload.imageUrl;
        state.userId = action.payload.userId;
      })
      .addCase(updateUserImage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })

      .addCase(userupdateprofile.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userupdateprofile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.userData;
      })
      .addCase(userupdateprofile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const {setData} = owndetailprofileSlice.actions;
export default owndetailprofileSlice.reducer;
