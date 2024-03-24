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

    return (
        <li className="text-xl text-slate-300 py-2">
            <button className="px-2 rounded-full bg-slate-500 text-white mr-2" onClick={() => dispatch(removeFromFavorites(location))}>Remove</button>
            <button onClick={navigateHomeWithLocation}>{location.name}</button>
        </li>);
}

const mapStateToProps = (state: RootState) => {
    const { favoriteLocations } = state.favorites;
    return { favoriteLocations: Object.values(favoriteLocations) }
}

const FavoriteLocations = ({ favoriteLocations }: { favoriteLocations: TLocation[] }) => {
    return (
        <div className='max-w-md p-8 mx-auto'>
            <h1 className="text-4xl text-slate-300 pb-4">Saved Locations</h1>
            <ul>
                {favoriteLocations.map(location => <FavoriteLocationCard key={location.id} location={location} />)}
            </ul>
        </div>
    )
}
  
const Favorites = connect(mapStateToProps)(FavoriteLocations);
export default Favorites;