export type TemperatureMetric = {
    Value: number,
    Unit: string,
    UnitType: number
};

export type TCurrentConditions = {
    WeatherText: string,
    // WeatherIcon: number,
    Temperature: {
        Metric: TemperatureMetric,
        Imperial: TemperatureMetric,
    },
};