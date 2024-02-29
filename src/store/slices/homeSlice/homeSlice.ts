import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HomeState, PostData} from '../../../../type';
import {db} from '../../../config/Firebase';
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
    const imagesSnapshot = await db.collection('Images').get();
    await Promise.all(
      imagesSnapshot.docs.map(async imageDoc => {
        const imageData = imageDoc.data();
        const postId = imageDoc.id;
        const userId = imageData.userId;
        const profileQuerySnapshot = await db
          .collection('profile')
          .where('userId', '==', userId)
          .get();
        await Promise.all(
          profileQuerySnapshot.docs.map(async profileDoc => {
            const profileData = profileDoc.data();
            const profileImage = profileData.downloadURL;
            const postData: PostData = {
              postId: imageDoc.id,
              userId: '',
              downloadURL: imageData.downloadURL,
              profileImageUrl: profileImage,
              mediaType: 'image',
              profileImage: '',
              createdAt: null,
              userName: imageData.userName,
              description: imageData.description,
            };
            posts.push(postData);
          }),
        );
      }),
    );

    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
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
