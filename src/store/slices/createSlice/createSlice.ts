import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

import {db} from '../../../config/Firebase';
import {PostState, UploadResult} from '../../../../type';

const initialState: PostState = {
  user: null,
  error: null,
  isLoading: false,
  description: '',
  imageUri: '',
  selectedAsset: '',
};

export const uploadImageAndDescription = createAsyncThunk(
  'uploadImage',
  async ({
    description,
    imageUri,
    selectedAsset,
  }: {
    description: string;
    imageUri: string;
    selectedAsset: any;
  }) => {
    try {
      if (!imageUri || !selectedAsset) {
        throw new Error('Please select all files');
      }

      const uploadTask = storage()
        .ref()
        .child(`/userprofile/${Date.now()}`)
        .putFile(imageUri);

      return new Promise<UploadResult>((resolve, reject) => {
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
                if (user) {
                  const userId = user.uid;
                  const userName = user.displayName || '';
                  const mediaType =
                    selectedAsset &&
                    selectedAsset.length > 0 &&
                    selectedAsset[0].type &&
                    selectedAsset[0].type.startsWith('video')
                      ? 'video'
                      : 'image';

                  await db.collection('Images').add({
                    downloadURL,
                    userName,
                    userId,
                    createdAt: new Date(),
                    mediaType,
                    description,
                  });

                  Alert.alert('Post successfully uploaded ');
                  resolve({success: true});
                }
              }
            } catch (error) {
              reject(error);
            }
          },
        );
      });
    } catch (error) {
      throw error;
    }
  },
);

const createpostSlice = createSlice({
  name: 'addpost',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(uploadImageAndDescription.pending, state => {
        state.isLoading = true;
      })
      .addCase(uploadImageAndDescription.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(uploadImageAndDescription.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const {} = createpostSlice.actions;

export default createpostSlice.reducer;
