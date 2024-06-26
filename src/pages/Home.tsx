import SearchBox from '../components/SearchBox';
import CurrentWeatherWidget from '../components/CurrentWeatherWidget';
import { TSuggestedLocation, TLocation } from '../types/location';
import WeatherForecast from '../components/WeatherForecast';
import { getCurrentWeatherConditions, getFivedaysForecast } from '../api/weatherApi';
import toast from 'react-hot-toast';
import { RootState } from '../state/store';
import { connect, useDispatch } from 'react-redux';
import { setCurrentLocation, setCurrentWeatherConditions } from '../state/slices/location';
import { useEffect, useState } from 'react';
import { TDailyForecasts } from '../types/weatherApi';


const TOAST_ERROR_IDS = {
  CURRENT_CONTIDIONS: "fetchConditionsError",
  FORECAST: "fetchForecastError"
};

const mapStateToProps = (state: RootState) => {
  const { location, favorites } = state;
  const { currentLocation } = location;
  const isLocationFavorited = !!favorites.favoriteLocations[currentLocation.id];

  return { currentLocation, isLocationFavorited };
}

const HomeComponent = ({ currentLocation, isLocationFavorited }: { currentLocation: TLocation, isLocationFavorited: boolean }) => {
  const [locationForecast, setLocationForecast] = useState<TDailyForecasts | null>(null);  
  const dispatch = useDispatch();
  const { id: currentLocId, currentWeatherConditions } = currentLocation;

  useEffect(() => {
    getCurrentWeatherConditions(currentLocId)
      .then(currentConditions => dispatch(setCurrentWeatherConditions(currentConditions)))
      .catch(() => toast.error("Could not get recent weather conditions", { id: TOAST_ERROR_IDS.CURRENT_CONTIDIONS }))

    getFivedaysForecast(currentLocId)
      .then(setLocationForecast)
      .catch(() => toast.error("Could not get recent weather forecast", { id: TOAST_ERROR_IDS.FORECAST }))
  }, [currentLocId, dispatch]);

  const onSearchedLocationSelected = (selectedLocation: TSuggestedLocation) => {
    if (selectedLocation.value !== currentLocId) {
      dispatch(setCurrentLocation({
        id: selectedLocation.value,
        name: selectedLocation.localizedName,
      }));
    }
  }

  return (
    <div className='flex flex-col'>
      <SearchBox onLocationSelected={onSearchedLocationSelected} />
      <CurrentWeatherWidget currentLocation={currentLocation} isFavorite={isLocationFavorited} currentConditions={currentWeatherConditions} />
      <WeatherForecast dailyForecasts={locationForecast} />
    </div>
  )
}
  
const Home = connect(mapStateToProps)(HomeComponent);
export default Home;