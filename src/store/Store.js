import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from '../Features/ThemeSlice'

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
});