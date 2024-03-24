import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TLocation } from '../../types/location';

type FavoritesState = {
  favoriteLocations: { [key: number]: TLocation };
}
const initialState: FavoritesState = {
  favoriteLocations: {}
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<TLocation>) => {
      if (!state.favoriteLocations[action.payload.id]) {
        state.favoriteLocations[action.payload.id] = action.payload;
      }
    },
    removeFromFavorites: (state, action: PayloadAction<TLocation>) => {
      if (state.favoriteLocations[action.payload.id]) {
        delete state.favoriteLocations[action.payload.id];
      }
    }
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;