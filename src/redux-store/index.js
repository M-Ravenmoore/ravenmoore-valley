import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../componets/counter/counterSlice'
import artistReducer from '../pages/artists/artistSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    artists: artistReducer
  }
})