import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../componets/counter/counterSlice'
import artistReducer from '../pages/artists/artistSlice'
import newsReducer from '../pages/news/newsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    artists: artistReducer,
    newsPosts: newsReducer
  }
})