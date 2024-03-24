import { TDailyForecasts, TDailyForecast } from "../types/weatherApi";

const DailyForecastCard = ({ dailyForecast }: { dailyForecast: TDailyForecast }) => {
    const { Minimum: minTemp, Maximum: maxTemp } = dailyForecast.Temperature;
    const dateOfDay = new Date(dailyForecast.Date);
    
    return (
        <div className="flex flex-col items-center space-y-2">
            <span>{dateOfDay.toLocaleDateString()}</span>
            <div>
                <span>{minTemp.Value}° {minTemp.Unit}</span>
                <span> - </span>
                <span>{maxTemp.Value}° {maxTemp.Unit}</span>
            </div>
        </div>
)};

const WeatherForecast = ({ dailyForecasts }: { dailyForecasts?: TDailyForecasts | null }) => {
    if (!dailyForecasts) {
        return null;
    }

    return (
        <div className="flex justify-center mt-8 space-x-4">
            {dailyForecasts.DailyForecasts.map((dailyForecast, idx) => (
                <DailyForecastCard key={idx} dailyForecast={dailyForecast} />
            ))}
        </div>
    );
};

export default WeatherForecast;