import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TLocation } from '../../types/location';
import { MOCK_CURRENT_CONDITIONS_TA } from '../../api/mocks';
import { TCurrentConditions } from '../../types/weatherApi';

type LocationState = {
  currentLocation: TLocation;
}
const initialState: LocationState = {
  currentLocation: {
    id: 215854,
    name: "Tel Aviv",
    currentWeatherConditions: MOCK_CURRENT_CONDITIONS_TA
  }
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<TLocation>) => {
      state.currentLocation = action.payload;
    },
    setCurrentWeatherConditions: (state, action: PayloadAction<TCurrentConditions | null>) => {
      state.currentLocation.currentWeatherConditions = action.payload;
    }, 
  },
})

export const { setCurrentLocation, setCurrentWeatherConditions } = locationSlice.actions;

export default locationSlice.reducer;