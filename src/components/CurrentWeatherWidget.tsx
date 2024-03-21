import { TCurrentConditions } from "../types/weatherApi";
import { TLocation } from "../types/location";

type Props = {
    currentLocation: TLocation
    currentConditions: TCurrentConditions | null;
};

const CurrentWeatherWidget = ({ currentConditions, currentLocation }: Props) => {
    if (!currentConditions) {
        return null;
    }

    const { Temperature, WeatherText } = currentConditions;
    const { Metric: temperatureMetric } = Temperature;

    return (
        <div className="max-w-md p-8 mx-auto space-y-2">
            <h1 className="text-xl font-semibold">{currentLocation.name}</h1>
            <div className="font-bold text-5xl">{temperatureMetric.Value}° {temperatureMetric.Unit}</div>
            <div className="text-2xl">{WeatherText}</div>
        </div>
    );
};

export default CurrentWeatherWidget;