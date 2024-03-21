export type TemperatureMetric = {
    Value: number,
    Unit: string,
    UnitType: number
};

// getCurrentConditions
export type TCurrentConditions = {
    WeatherText: string,
    // WeatherIcon: number,
    Temperature: {
        Metric: TemperatureMetric,
        Imperial: TemperatureMetric,
    },
};

// forecast
export type TDailyForecast = {
  Date: string,
  EpochDate: number,
  Temperature: {
    Minimum: TemperatureMetric,
    Maximum: TemperatureMetric
  },
  // Day: {
  //   "Icon": 3,
  //   "IconPhrase": "Partly sunny",
  //   "HasPrecipitation": false
  // },
  // Night: {
  //   "Icon": 33,
  //   "IconPhrase": "Clear",
  //   "HasPrecipitation": false
  // },
};

export type TDailyForecasts = {
  // Headline: {
  //   EffectiveDate: string,
  //   EffectiveEpochDate: number,
  //   EndDate: string,
  //   EndEpochDate: number,
  // },
  DailyForecasts: TDailyForecast[]
};


// Auto complete location
export type TAutoCompleteLocationResult = {
    Version: number,
    Key: string,
    Type: string,
    Rank: number,
    LocalizedName: string,
    Country: {
      ID: string,
      LocalizedName: string
    },
    AdministrativeArea: {
      ID: string,
      LocalizedName: string
    }
};
export type TAutoCompleteLocation = TAutoCompleteLocationResult[];