import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HomeState} from '../../../../type';
import {db} from '../../../config/Firebase';

const initialState: HomeState = {
  user: null,
  error: null,
  isLoading: false,
  data: [],
  setData: [],
  isVideoPlaying: false,
};

export const fetchPost = createAsyncThunk('fetchPost', async () => {
  try {
    const response = await db.collection('Images').get();
    const fetchData = response.docs.map(doc => {
      const data = doc.data();
      const createdAt = data.createdAt ? data.createdAt.toMillis() : null;
      return {...data, createdAt};
    });
    console.log('response', fetchData);
    return fetchData;
  } catch (error) {
    console.error('Error fetching locations:', error);
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
