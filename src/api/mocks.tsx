import { TCurrentConditions } from "../types/weatherApi";

export const MOCK_CURRENT_CONDITIONS_TA = {
    EpochTime: 1711026420,
    WeatherText: "Clouds and sun",
    WeatherIcon: 4,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
        Metric: { Value: 19.9, Unit: "C", UnitType: 17},
        Imperial: {Value: 68, Unit: "F", UnitType: 18},
    },
} as TCurrentConditions;

export const MOCK_CURRENT_CONDITIONS_NY = {
    EpochTime: 1711023900, 
    HasPrecipitation: false,
    IsDayTime: false,
    PrecipitationType: null,
    Temperature: {
        Metric: {Value: 14.2, Unit: 'C', UnitType: 17}, 
        Imperial: {Value: 57, Unit: 'F', UnitType: 18}
    },
    WeatherIcon: 33,
    WeatherText: "Clear",
} as TCurrentConditions;