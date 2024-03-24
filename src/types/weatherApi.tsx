export type TemperatureMetric = {
  Value: number,
  Unit: string,
  UnitType: number
};

export type TCurrentConditions = {
  WeatherText: string,
  WeatherIcon: number,
  Temperature: {
      Metric: TemperatureMetric,
      Imperial: TemperatureMetric,
  },
};

type TDailyForecastSummary = {
  Icon: number,
  IconPhrase: string,
};

export type TDailyForecast = {
  Date: string,
  EpochDate: number,
  Temperature: {
    Minimum: TemperatureMetric,
    Maximum: TemperatureMetric
  },
  Day: TDailyForecastSummary,
  Night: TDailyForecastSummary,
};

export type TDailyForecasts = {
  DailyForecasts: TDailyForecast[]
};


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