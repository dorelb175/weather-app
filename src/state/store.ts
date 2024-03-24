import { configureStore } from '@reduxjs/toolkit';
import favorites from './slices/favorites';
import location from './slices/location';

export const store = configureStore({
  reducer: {
    favorites,
    location,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
