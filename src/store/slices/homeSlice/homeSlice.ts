import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HomeState, PostData} from '../../../../type';
import {Images, profile} from '../../../constants/instance';
const initialState: HomeState = {
  user: null,
  error: null,
  isLoading: false,
  data: [],
  setData: [],
  isVideoPlaying: false,
};

export const fetchPost = createAsyncThunk('allPosts', async () => {
  try {
    const posts: PostData[] = [];
    const imagesSnapshot = await Images.get();

    await Promise.all(
      imagesSnapshot.docs.map(async imageDoc => {
        const imageData = imageDoc.data();
        const postId = imageDoc.id;
        const userId = imageData.userId;
        const profileQuerySnapshot = await profile
          .where('userId', '==', userId)
          .get();

        let profileImageUrl = '';
        if (!profileQuerySnapshot.empty) {
          const profileDoc = profileQuerySnapshot.docs[0];
          const profileData = profileDoc.data();
          profileImageUrl = profileData.downloadURL;
        }

        const postData: PostData = {
          postId: imageDoc.id,
          userId: '',
          downloadURL: imageData.downloadURL,
          profileImageUrl: profileImageUrl,
          mediaType: 'image',
          profileImage: '',
          createdAt: null,
          userName: imageData.userName,
          description: imageData.description,
        };
        posts.push(postData);
      }),
    );

    return posts;
  } catch (error) {
    throw error;
  }
});

const fetchPostSlice = createSlice({
  name: 'allPosts',
  initialState,
  reducers: {
    setIsVideoPlaying: (state, action) => {
      state.isVideoPlaying = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPost.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const {setIsVideoPlaying} = fetchPostSlice.actions;
export default fetchPostSlice.reducer;
