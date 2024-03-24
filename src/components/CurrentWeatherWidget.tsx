import { TCurrentConditions } from "../types/weatherApi";
import { TLocation } from "../types/location";
import { addToFavorites, removeFromFavorites } from "../state/slices/favorites";
import { useDispatch } from "react-redux";
import ToggleFavoriteIcon from "./ToggleFavoriteIcon";
import WeatherIcon from "./WeatherIcon";

type Props = {
    currentLocation: TLocation
    isFavorite: boolean,
    currentConditions?: TCurrentConditions | null;
};

const CurrentWeatherWidget = ({ currentLocation, isFavorite, currentConditions }: Props) => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        const action = isFavorite ? removeFromFavorites(currentLocation) : addToFavorites(currentLocation);
        dispatch(action);
    }

    if (!currentConditions) {
        return null;
    }

    const { Temperature, WeatherText, WeatherIcon: iconNumber } = currentConditions;
    const { Metric: temperatureMetric } = Temperature;

    return (
        <div className="max-w-md p-8 mx-auto space-y-2 cursor-default">
            <h1 className="flex flex-row text-xl font-semibold">
                <ToggleFavoriteIcon isFavorite={isFavorite} handleToggleFavorite={handleToggleFavorite} />
                {currentLocation.name} 
            </h1>
            <WeatherIcon iconNumber={iconNumber} />
            <div className="font-bold text-5xl">{temperatureMetric.Value}° {temperatureMetric.Unit}</div>
            <div className="text-2xl">{WeatherText}</div>
        </div>
    );
};

export default CurrentWeatherWidget;