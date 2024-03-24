import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TLocation } from '../../types/location';

type LocationState = {
  currentLocation: TLocation;
}
const initialState: LocationState = {
  currentLocation: {
    id: 215854,
    name: "Tel Aviv",
  }
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<TLocation>) => {
      state.currentLocation = action.payload;
    }
  },
})

export const { setCurrentLocation } = locationSlice.actions;

export default locationSlice.reducer;