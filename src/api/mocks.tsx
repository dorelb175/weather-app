import { TAutoCompleteLocation, TCurrentConditions, TDailyForecasts } from "../types/weatherApi";

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

export const MOCK_FORECAST_TA = {
    "Headline": {
      "EffectiveDate": "2024-03-21T19:00:00+02:00",
      "EffectiveEpochDate": 1711040400,
      "Severity": 5,
      "Text": "Expect showers Thursday night",
      "Category": "rain",
      "EndDate": "2024-03-22T07:00:00+02:00",
      "EndEpochDate": 1711083600,
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2024-03-21T07:00:00+02:00",
        "EpochDate": 1710997200,
        "Temperature": {
          "Minimum": {
            "Value": 13.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 20.8,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 13,
          "IconPhrase": "Mostly cloudy w/ showers",
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Night": {
          "Icon": 39,
          "IconPhrase": "Partly cloudy w/ showers",
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
      },
      {
        "Date": "2024-03-22T07:00:00+02:00",
        "EpochDate": 1711083600,
        "Temperature": {
          "Minimum": {
            "Value": 13.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 19.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
        },
      },
      {
        "Date": "2024-03-23T07:00:00+02:00",
        "EpochDate": 1711170000,
        "Temperature": {
          "Minimum": {
            "Value": 12,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 19.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 4,
          "IconPhrase": "Intermittent clouds",
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
        },
      },
      {
        "Date": "2024-03-24T07:00:00+02:00",
        "EpochDate": 1711256400,
        "Temperature": {
          "Minimum": {
            "Value": 13.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 19.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 4,
          "IconPhrase": "Intermittent clouds",
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
        },
      },
      {
        "Date": "2024-03-25T07:00:00+02:00",
        "EpochDate": 1711342800,
        "Temperature": {
          "Minimum": {
            "Value": 13.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 19.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
        },
      }
    ]
  } as TDailyForecasts;

export const MOCK_FORECAST_NY = {
  "Headline": {
    "EffectiveDate": "2024-03-23T08:00:00+10:30",
    "EffectiveEpochDate": 1711143000,
    "Severity": 4,
    "Text": "Pleasant Saturday",
    "Category": "mild",
    "EndDate": null,
    "EndEpochDate": null,
    "MobileLink": "http://www.accuweather.com/en/au/aberfoyle-park/3497031/daily-weather-forecast/3497031?lang=en-us",
    "Link": "http://www.accuweather.com/en/au/aberfoyle-park/3497031/daily-weather-forecast/3497031?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2024-03-21T07:00:00+02:00",
      "EpochDate": 1710966600,
      "Temperature": {
        "Minimum": {
          "Value": 50,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 71,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
      },
    },
    {
      "Date": "2024-03-22T07:00:00+02:00",
      "EpochDate": 1711053000,
      "Temperature": {
        "Minimum": {
          "Value": 53,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 70,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
      },
    },
    {
      "Date": "2024-03-23T07:00:00+02:00",
      "EpochDate": 1711139400,
      "Temperature": {
        "Minimum": {
          "Value": 48,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 70,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 2,
        "IconPhrase": "Mostly sunny",
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
      },
    },
    {
      "Date": "2024-03-24T07:00:00+02:00",
      "EpochDate": 1711225800,
      "Temperature": {
        "Minimum": {
          "Value": 50,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 69,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
      },
    },
  ]
} as TDailyForecasts;

export const MOCK_AUTOCOMPLETE_LOCATION = [
    {
      "Version": 1,
      "Key": "2333525",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "New Territories",
      "Country": {
        "ID": "HK",
        "LocalizedName": "Hong Kong"
      },
      "AdministrativeArea": {
        "ID": "TW",
        "LocalizedName": "Tsuen Wan"
      }
    },
    {
      "Version": 1,
      "Key": "349727",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "New York",
      "Country": {
        "ID": "US",
        "LocalizedName": "United States"
      },
      "AdministrativeArea": {
        "ID": "NY",
        "LocalizedName": "New York"
      }
    },
    {
      "Version": 1,
      "Key": "187745",
      "Type": "City",
      "Rank": 21,
      "LocalizedName": "New Delhi",
      "Country": {
        "ID": "IN",
        "LocalizedName": "India"
      },
      "AdministrativeArea": {
        "ID": "DL",
        "LocalizedName": "Delhi"
      }
    },
    {
      "Version": 1,
      "Key": "2515397",
      "Type": "City",
      "Rank": 21,
      "LocalizedName": "New Taipei City",
      "Country": {
        "ID": "TW",
        "LocalizedName": "Taiwan"
      },
      "AdministrativeArea": {
        "ID": "NWT",
        "LocalizedName": "New Taipei City"
      }
    },
    {
      "Version": 1,
      "Key": "298885",
      "Type": "City",
      "Rank": 32,
      "LocalizedName": "Newcastle",
      "Country": {
        "ID": "ZA",
        "LocalizedName": "South Africa"
      },
      "AdministrativeArea": {
        "ID": "KZN",
        "LocalizedName": "Kwazulu-Natal"
      }
    },
    {
      "Version": 1,
      "Key": "12777",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "Newcastle",
      "Country": {
        "ID": "AU",
        "LocalizedName": "Australia"
      },
      "AdministrativeArea": {
        "ID": "NSW",
        "LocalizedName": "New South Wales"
      }
    },
    {
      "Version": 1,
      "Key": "3588491",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "New Cairo",
      "Country": {
        "ID": "EG",
        "LocalizedName": "Egypt"
      },
      "AdministrativeArea": {
        "ID": "C",
        "LocalizedName": "Cairo"
      }
    },
    {
      "Version": 1,
      "Key": "348585",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "New Orleans",
      "Country": {
        "ID": "US",
        "LocalizedName": "United States"
      },
      "AdministrativeArea": {
        "ID": "LA",
        "LocalizedName": "Louisiana"
      }
    },
    {
      "Version": 1,
      "Key": "349530",
      "Type": "City",
      "Rank": 35,
      "LocalizedName": "Newark",
      "Country": {
        "ID": "US",
        "LocalizedName": "United States"
      },
      "AdministrativeArea": {
        "ID": "NJ",
        "LocalizedName": "New Jersey"
      }
    },
    {
      "Version": 1,
      "Key": "329683",
      "Type": "City",
      "Rank": 41,
      "LocalizedName": "Newcastle upon Tyne",
      "Country": {
        "ID": "GB",
        "LocalizedName": "United Kingdom"
      },
      "AdministrativeArea": {
        "ID": "NET",
        "LocalizedName": "Newcastle upon Tyne"
      }
    }
] as TAutoCompleteLocation;