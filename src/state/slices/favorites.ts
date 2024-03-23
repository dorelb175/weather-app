import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TLocation } from '../../types/location';

type FavoritesState = {
    favoriteLocations: TLocation[];
}
const initialState: FavoritesState = {
    favoriteLocations: []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<TLocation>) => {
      state.favoriteLocations.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<TLocation>) => {
      state.favoriteLocations = state.favoriteLocations.filter(loc => loc.id !== action.payload.id);
    }
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;