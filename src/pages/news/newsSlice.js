import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL;

const initialState = {
  newsPosts: [],
  status: 'idle',
  error: null 
}


export const fetchNews = createAsyncThunk('newsPosts/fetchNews', async () => {
  const response = await axios.get(`${serverUrl}/api/newsletter`)
        console.log("data from API", response.data)
        return response.data
})

export const newsSlice = createSlice({
  name: 'newsPosts',
  initialState,
  reducers: { 
    extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  } }
});
export const selectAllNewsPosts = state => state.newsPosts.newsPosts

export const selectPostById = (state, postId) =>
  state.newsPosts.newsPosts.find(post => post.id === postId)

export default newsSlice.reducer