import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {db} from '../../../config/Firebase';
import storage from '@react-native-firebase/storage';
import {ImageState, UploadResult1} from '../../../../type';

const initialState: ImageState = {
  isLoading: false,
  error: null,
  imageUrl: '',
  userId: '',
};

export const updateUserImage = createAsyncThunk(
  'updateImage',
  async ({imageUri}: {imageUri: string}) => {
    try {
      if (!imageUri) {
        throw new Error('Please select all files');
      }

      const uploadTask = storage()
        .ref()
        .child(`/profile/${Date.now()}`)
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
                const user = auth().currentUser;
                const userId = user?.uid;
                if (userId) {
                  // Store the downloadURL with user's UID
                  await db.collection('profile').doc(userId).set({
                    downloadURL,
                    userId,
                  });
                  // Update the imageUrl in Redux store
                  resolve({success: true, imageUrl: downloadURL});
                }
              }
            } catch (error) {
              console.error('Error getting download URL', error);
              reject(error);
            }
          },
        );
      });
    } catch (error) {
      console.error('Error uploading image', error);
      throw error;
    }
  },
);

const updateprofileimageSlice = createSlice({
  name: 'updateImage',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(updateUserImage.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.imageUrl = action.payload.imageUrl;
      })
      .addCase(updateUserImage.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default updateprofileimageSlice.reducer;
