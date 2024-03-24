import SearchBox from '../components/SearchBox';
import CurrentWeatherWidget from '../components/CurrentWeatherWidget';
import { TLocation } from '../types/location';
import WeatherForecast from '../components/WeatherForecast';
import { getAutoCompleteLocations, getCurrentWeatherConditions, getFivedaysForecast } from '../api/weatherApi';
import toast from 'react-hot-toast';
// import { useQuery } from 'react-query';
import { RootState } from '../state/store';
import { connect, useDispatch } from 'react-redux';
import { setCurrentLocation } from '../state/slices/location';
import { useEffect, useState } from 'react';
import { TCurrentConditions, TDailyForecasts } from '../types/weatherApi';

const mapStateToProps = (state: RootState) => {
  const { location, favorites } = state;
  const { currentLocation } = location;
  const isLocationFavorited = !!favorites.favoriteLocations[currentLocation.id];

  return { currentLocation, isLocationFavorited };
}

const HomeComponent = ({ currentLocation, isLocationFavorited }: { currentLocation: TLocation, isLocationFavorited: boolean }) => {
  const [currentConditions, setCurrentConditions] = useState<TCurrentConditions | null>(null);
  const [locationForecast, setLocationForecast] = useState<TDailyForecasts | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentWeatherConditions(currentLocation.id)
      .then(setCurrentConditions)
      .catch(() => toast.error("Could not get recent weather conditions", { id: "fetchConditionsError" }))

    getFivedaysForecast(currentLocation.id)
      .then(setLocationForecast)
      .catch(() => toast.error("Could not get recent weather forecast", { id: "fetchForecastError" }))
  }, [currentLocation.id]);
  
  const setCurrentLocationIfNeeded = (location: TLocation) => {
    if (location.id !== currentLocation.id) {
      dispatch(setCurrentLocation(location));
    } else {
      console.log("no need change")
    }
  }

  const onSearchClicked = (searchText: string) => {
    getAutoCompleteLocations(searchText).then(optionalLocations => {
      if (optionalLocations && optionalLocations.length > 0) {
        const location: TLocation = {
          id: parseInt(optionalLocations[0].Key),
          name: optionalLocations[0].LocalizedName
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
      <CurrentWeatherWidget currentLocation={currentLocation} isFavorite={isLocationFavorited} currentConditions={currentConditions} />
      <WeatherForecast dailyForecasts={locationForecast} />
    </div>
  )
}
  
const Home = connect(mapStateToProps)(HomeComponent);
export default Home;