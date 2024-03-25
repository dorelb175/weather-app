import { TAutoCompleteLocation, TCurrentConditions, TDailyForecasts } from "../types/weatherApi";

const BASE_API_URL = 'https://dataservice.accuweather.com';
const API_KEY = import.meta.env.VITE_ACCUWEATHER_API_KEY;

export const getCurrentWeatherConditions = async (location: number) => {
    const url = `${BASE_API_URL}/currentconditions/v1/${location}/?apikey=${API_KEY}`;
    
    try {
        const apiRes = await fetch(url).then(res => res.json());
        const currWeatherConditions = await apiRes[0] as TCurrentConditions;
        return currWeatherConditions;
    } catch (err) {
        console.error(`Error in getCurrentWeatherConditions with location=${location}: ${err}`);
        return null
    }
};

export const getAutoCompleteLocations = async (searchText: string) => {
    const url = `${BASE_API_URL}/locations/v1/cities/autocomplete/?q=${searchText}&apikey=${API_KEY}`;
    
    try {
        const apiRes = await fetch(url);
        const optionalLocations = await apiRes.json() as TAutoCompleteLocation;
        return optionalLocations;
    } catch (err) {
        console.error(`Error in getAutoCompleteLocations with searchText=${searchText}: ${err}`);
        return null;
    }
};

export const getFivedaysForecast = async (location: number) => {
    const url = `${BASE_API_URL}/forecasts/v1/daily/5day/${location}/?apikey=${API_KEY}`;
    
    try {
        const apiRes = await fetch(url).then(res => res.json());
        const currWeatherForecast = await apiRes as TDailyForecasts;
        console.log(currWeatherForecast);
        return currWeatherForecast;
    } catch (err) {
        console.error(`Error in getFivedaysForecast with location=${location}: ${err}`);
        return null;
    }
};
