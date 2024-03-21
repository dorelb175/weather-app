import { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import CurrentWeatherWidget from '../components/CurrentWeatherWidget';
import { DEFAULT_LOCATION, TLocation } from '../types/location';
import WeatherForecast from '../components/WeatherForecast';
import { TCurrentConditions, TDailyForecasts } from '../types/weatherApi';
import { getAutoCompleteLocations, getCurrentWeatherConditions, getFivedaysForecast } from '../api/weatherApi';

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState<TLocation>(DEFAULT_LOCATION);
  const [currentConditions, setCurrentConditions] = useState<TCurrentConditions | null>(null);
  const [locationForecast, setLocationForecast] = useState<TDailyForecasts | null>(null);

  useEffect(() => {
    getCurrentWeatherConditions(currentLocation.id).then(setCurrentConditions);
    getFivedaysForecast(currentLocation.id).then(setLocationForecast);
  }, [currentLocation]);

  const onSearchClicked = (searchText: string) => {
    getAutoCompleteLocations(searchText).then(optionalLocations => {
      if (optionalLocations && optionalLocations.length > 0) {
        const location: TLocation = {
          id: parseInt(optionalLocations[0].Key),
          name: optionalLocations[0].LocalizedName
        };
        setCurrentLocation(location);
      } else {
        // show toast error
      }
    }).catch(err => console.error(err));
  }

  return (
    <div className='flex flex-col'>
      <SearchBox onSearchClicked={onSearchClicked} />
      <CurrentWeatherWidget currentLocation={currentLocation} currentConditions={currentConditions} />
      <WeatherForecast dailyForecasts={locationForecast} />
    </div>
  )
}
  
export default Home;