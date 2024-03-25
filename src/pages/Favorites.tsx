import { connect } from "react-redux";
import { TLocation } from "../types/location";
import { RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../state/slices/favorites";
import { useNavigate } from 'react-router-dom';
import { setCurrentLocation } from "../state/slices/location";

const FavoriteLocationCard = ({ location }: { location: TLocation }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const navigateHomeWithLocation = () => {
        dispatch(setCurrentLocation(location));
        navigate('/');
    }

    const { name, currentWeatherConditions } = location;

    return (
        <li className="flex justify-start text-xl text-slate-300 py-4">
            <button className="rounded-full bg-slate-400 text-white text-base px-3 mr-3" onClick={() => dispatch(removeFromFavorites(location))}>Unsave</button>
            <button onClick={navigateHomeWithLocation} className="text-black">
                <span className="font-bold"> {name} </span>
                {currentWeatherConditions && (
                    <div className="font-thin">
                        <span> {currentWeatherConditions.WeatherText} </span>
                        <span>
                            {currentWeatherConditions.Temperature.Metric.Value}° 
                            {currentWeatherConditions.Temperature.Metric.Unit}
                        </span>
                    </div>
                )}
            </button>
        </li>);
}

const mapStateToProps = (state: RootState) => {
    const { favoriteLocations } = state.favorites;
    return { favoriteLocations: Object.values(favoriteLocations) }
}

const FavoriteLocations = ({ favoriteLocations }: { favoriteLocations: TLocation[] }) => {
    return (
        <div className='max-w-xl p-8 mx-auto'>
            <h1 className="text-4xl text-slate-300 pb-4">Saved Locations</h1>
            <ul>
                {favoriteLocations.map(location => <FavoriteLocationCard key={location.id} location={location} />)}
            </ul>
        </div>
    )
}
  
const Favorites = connect(mapStateToProps)(FavoriteLocations);
export default Favorites;