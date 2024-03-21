import { TemperatureMetric } from "../types/weatherApi";

type DayForecastCardProps = {
    day: string,
    temperature: TemperatureMetric,
};

const WeatherDayForecastCard = ({ day, temperature }: DayForecastCardProps) => (
    <div className="flex flex-col items-center space-y-1">
        <span className="uppercase">{day}</span>
        <span>{temperature.Value}° {temperature.Unit}</span>
    </div>
);

const WeatherForecast = () => (
    <div className="flex justify-around mt-8 space-x-4 dark:text-gray-400">
        <WeatherDayForecastCard day={"SUN"} temperature={{ Value: 20, Unit: "C", UnitType: 1}} />
        <WeatherDayForecastCard day={"SUN"} temperature={{ Value: 20, Unit: "C", UnitType: 1}} />
    </div>
);

export default WeatherForecast;