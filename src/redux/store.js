import { configureStore } from '@reduxjs/toolkit'
import shoppingSlice from '../slices/shoppingSlice'

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingSlice,
  },
})