import { TDailyForecasts, TDailyForecast } from "../types/weatherApi";
import WeatherIcon from "./WeatherIcon";

const DAYS_FORMAT = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const DailyForecastCard = ({ dailyForecast }: { dailyForecast: TDailyForecast }) => {
    const { Minimum: minTemp, Maximum: maxTemp } = dailyForecast.Temperature;
    const { Day: dayWeatherSummary, Night: nightWeatherSummary } = dailyForecast;
    const dateOfDay = new Date(dailyForecast.Date);
    
    return (
        <div className="w-auto px-2 flex flex-col items-center space-y-5 shadow-xl shadow-slate-700 rounded-xl font-semibold">
            <span>{dateOfDay.toLocaleDateString()}</span>
            <span>{DAYS_FORMAT[dateOfDay.getDay()]}</span>
            <div>
                <span>{minTemp.Value}° {minTemp.Unit}</span>
                <span> / </span>
                <span>{maxTemp.Value}° {maxTemp.Unit}</span>
            </div>
            <div> 
                <WeatherIcon iconNumber={dayWeatherSummary.Icon} />
                <WeatherIcon iconNumber={nightWeatherSummary.Icon} />
            </div>
        </div>
)};

const WeatherForecast = ({ dailyForecasts }: { dailyForecasts?: TDailyForecasts | null }) => {
    if (!dailyForecasts) {
        return null;
    }

    return (
        <div className="flex justify-center mt-8 space-x-5 cursor-default">
            {dailyForecasts.DailyForecasts.map((dailyForecast, idx) => (
                <DailyForecastCard key={idx} dailyForecast={dailyForecast} />
            ))}
        </div>
    );
};

export default WeatherForecast;