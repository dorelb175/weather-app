import { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import CurrentWeatherWidget from '../components/CurrentWeatherWidget';
import { DEFAULT_LOCATION, TLocation } from '../types/location';
import WeatherForecast from '../components/WeatherForecast';
import { TCurrentConditions, TDailyForecasts } from '../types/weatherApi';
import { getAutoCompleteLocations, getCurrentWeatherConditions, getFivedaysForecast } from '../api/weatherApi';
import toast from 'react-hot-toast';

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState<TLocation>(DEFAULT_LOCATION);
  const [currentConditions, setCurrentConditions] = useState<TCurrentConditions | null>(null);
  const [locationForecast, setLocationForecast] = useState<TDailyForecasts | null>(null);

  useEffect(() => {
    getCurrentWeatherConditions(currentLocation.id).then(setCurrentConditions).catch(() => toast.error("Could not get recent weather conditions"));
    getFivedaysForecast(currentLocation.id).then(setLocationForecast).catch(() => toast.error("Could not get recent weather forecast"));
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
        toast.error("No locations found");
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