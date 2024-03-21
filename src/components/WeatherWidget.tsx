import { TCurrentConditions } from "../types/weatherApi";
import { TLocation } from "../types/location";

type Props = {
    currentLocation: TLocation
    currentConditions: TCurrentConditions | null;
};

const WeatherWidget = ({ currentConditions, currentLocation }: Props) => {
    if (!currentConditions) {
        return null;
    }

    const { Temperature, WeatherText } = currentConditions;
    const { Metric } = Temperature;

    return (
        <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-xl font-semibold">{currentLocation.name}</h1>
            <div className="font-bold text-5xl">{Metric.Value}° {Metric.Unit}</div>
            <div className="text-2xl">{WeatherText}</div>
        </div>
    );
};

export default WeatherWidget;