import SearchBox from '../components/SearchBox';
import WeatherWidget from '../components/WeatherWidget';
import { DEFAULT_LOCATION } from '../types/location';
import WeatherForecast from '../components/WeatherForecast';
import { MOCK_CURRENT_CONDITIONS_TA } from '../api/mocks';

const Home = () => {
    return (
      <div className='flex flex-col justify-center'>
        <SearchBox onSearchClicked={() => {}} />
        <WeatherWidget currentLocation={DEFAULT_LOCATION} currentConditions={MOCK_CURRENT_CONDITIONS_TA} />
        <WeatherForecast />
      </div>
    )
  }
  
export default Home;