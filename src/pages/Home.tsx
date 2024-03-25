import SearchBox from '../components/SearchBox';
import CurrentWeatherWidget from '../components/CurrentWeatherWidget';
import { TLocation } from '../types/location';
import WeatherForecast from '../components/WeatherForecast';
import { getAutoCompleteLocations, getCurrentWeatherConditions, getFivedaysForecast } from '../api/weatherApi';
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
  
  const setCurrentLocationIfNeeded = (location: TLocation) => {
    if (location.id !== currentLocId) {
      dispatch(setCurrentLocation(location));
    }
  }

  const onSearchClicked = (searchText: string) => {
    getAutoCompleteLocations(searchText).then(optionalLocations => {
      if (optionalLocations && optionalLocations.length > 0) {
        const location: TLocation = {
          id: parseInt(optionalLocations[0].Key),
          name: optionalLocations[0].LocalizedName,
          currentWeatherConditions,
        };
        setCurrentLocationIfNeeded(location);
      } else {
        toast.error(`No locations found for "${searchText}"`, { id: searchText });
      }
    }).catch(err => console.error(err));
  }

  return (
    <div className='flex flex-col'>
      <SearchBox onSearchClicked={onSearchClicked} />
      <CurrentWeatherWidget currentLocation={currentLocation} isFavorite={isLocationFavorited} currentConditions={currentWeatherConditions} />
      <WeatherForecast dailyForecasts={locationForecast} />
    </div>
  )
}
  
const Home = connect(mapStateToProps)(HomeComponent);
export default Home;