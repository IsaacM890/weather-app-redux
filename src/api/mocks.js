/** @format */

const mockData = {
  locationsAutoComplete: [
    {
      Version: 1,
      Key: '102244',
      Type: 'City',
      Rank: 11,
      LocalizedName: 'Fuzhou',
      Country: { ID: 'CN', LocalizedName: 'China' },
      AdministrativeArea: { ID: 'FJ', LocalizedName: 'Fujian' },
    },
    {
      Version: 1,
      Key: '56914',
      Type: 'City',
      Rank: 13,
      LocalizedName: 'Fuyang',
      Country: { ID: 'CN', LocalizedName: 'China' },
      AdministrativeArea: { ID: 'AH', LocalizedName: 'Anhui' },
    },
    {
      Version: 1,
      Key: '58186',
      Type: 'City',
      Rank: 13,
      LocalizedName: 'Foshan',
      Country: { ID: 'CN', LocalizedName: 'China' },
      AdministrativeArea: { ID: 'GD', LocalizedName: 'Guangdong' },
    },
    {
      Version: 1,
      Key: '59708',
      Type: 'City',
      Rank: 15,
      LocalizedName: 'Fuzhou',
      Country: { ID: 'CN', LocalizedName: 'China' },
      AdministrativeArea: { ID: 'JX', LocalizedName: 'Jiangxi' },
    },
    {
      Version: 1,
      Key: '223544',
      Type: 'City',
      Rank: 21,
      LocalizedName: 'Fukuoka-shi',
      Country: { ID: 'JP', LocalizedName: 'Japan' },
      AdministrativeArea: { ID: '40', LocalizedName: 'Fukuoka' },
    },
    {
      Version: 1,
      Key: '243090',
      Type: 'City',
      Rank: 21,
      LocalizedName: 'Fes',
      Country: { ID: 'MA', LocalizedName: 'Morocco' },
      AdministrativeArea: { ID: '03', LocalizedName: 'Fès-Meknès' },
    },
    {
      Version: 1,
      Key: '202446',
      Type: 'City',
      Rank: 22,
      LocalizedName: 'Faridabad',
      Country: { ID: 'IN', LocalizedName: 'India' },
      AdministrativeArea: { ID: 'HR', LocalizedName: 'Haryana' },
    },
    {
      Version: 1,
      Key: '57519',
      Type: 'City',
      Rank: 23,
      LocalizedName: 'Fangshan District',
      Country: { ID: 'CN', LocalizedName: 'China' },
      AdministrativeArea: { ID: 'BJ', LocalizedName: 'Beijing' },
    },
    {
      Version: 1,
      Key: '59106',
      Type: 'City',
      Rank: 23,
      LocalizedName: 'Fangcheng County',
      Country: { ID: 'CN', LocalizedName: 'China' },
      AdministrativeArea: { ID: 'HA', LocalizedName: 'Henan' },
    },
    {
      Version: 1,
      Key: '59602',
      Type: 'City',
      Rank: 23,
      LocalizedName: 'Feng County',
      Country: { ID: 'CN', LocalizedName: 'China' },
      AdministrativeArea: { ID: 'JS', LocalizedName: 'Jiangsu' },
    },
  ],
  forecast: {
    Headline: {
      EffectiveDate: '2021-10-26T19:00:00+08:00',
      EffectiveEpochDate: 1635246000,
      Severity: 7,
      Text: 'Warm Tuesday night',
      Category: 'heat',
      EndDate: '2021-10-27T07:00:00+08:00',
      EndEpochDate: 1635289200,
      MobileLink:
        'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?unit=c&lang=en-us',
    },
    DailyForecasts: [
      {
        Date: '2021-10-24T07:00:00+08:00',
        EpochDate: 1635030000,
        Sun: {
          Rise: '2021-10-24T06:06:00+08:00',
          EpochRise: 1635026760,
          Set: '2021-10-24T17:28:00+08:00',
          EpochSet: 1635067680,
        },
        Moon: {
          Rise: '2021-10-24T19:51:00+08:00',
          EpochRise: 1635076260,
          Set: '2021-10-25T09:58:00+08:00',
          EpochSet: 1635127080,
          Phase: 'WaningGibbous',
          Age: 18,
        },
        Temperature: {
          Minimum: { Value: 16.0, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 20.0, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperature: {
          Minimum: { Value: 16.1, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 19.3, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperatureShade: {
          Minimum: { Value: 16.1, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 19.3, Unit: 'C', UnitType: 17 },
        },
        HoursOfSun: 1.5,
        DegreeDaySummary: {
          Heating: { Value: 0.0, Unit: 'C', UnitType: 17 },
          Cooling: { Value: 0.0, Unit: 'C', UnitType: 17 },
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 25,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone',
          },
          { Name: 'Grass', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Mold', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Ragweed', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Tree', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'UVIndex', Value: 1, Category: 'Low', CategoryValue: 1 },
        ],
        Day: {
          Icon: 7,
          IconPhrase: 'Cloudy',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '02' },
          ShortPhrase: 'Cloudy and cool',
          LongPhrase: 'Cloudy and cool',
          PrecipitationProbability: 14,
          ThunderstormProbability: 0,
          RainProbability: 14,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 7.4, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 335, Localized: 'NNW', English: 'NNW' },
          },
          WindGust: {
            Speed: { Value: 22.2, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 14, Localized: 'NNE', English: 'NNE' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 97,
          Evapotranspiration: { Value: 0.1, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 1.3, Unit: 'W/m²', UnitType: 33 },
        },
        Night: {
          Icon: 7,
          IconPhrase: 'Cloudy',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '02' },
          ShortPhrase: 'Cloudy',
          LongPhrase: 'Cloudy',
          PrecipitationProbability: 8,
          ThunderstormProbability: 0,
          RainProbability: 8,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 5.6, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 318, Localized: 'NW', English: 'NW' },
          },
          WindGust: {
            Speed: { Value: 9.3, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 317, Localized: 'NW', English: 'NW' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 65,
          Evapotranspiration: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 0.0, Unit: 'W/m²', UnitType: 33 },
        },
        Sources: ['AccuWeather', 'Huafeng'],
        MobileLink:
          'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=1&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=1&unit=c&lang=en-us',
      },
      {
        Date: '2021-10-25T07:00:00+08:00',
        EpochDate: 1635116400,
        Sun: {
          Rise: '2021-10-25T06:07:00+08:00',
          EpochRise: 1635113220,
          Set: '2021-10-25T17:27:00+08:00',
          EpochSet: 1635154020,
        },
        Moon: {
          Rise: '2021-10-25T20:34:00+08:00',
          EpochRise: 1635165240,
          Set: '2021-10-26T10:51:00+08:00',
          EpochSet: 1635216660,
          Phase: 'WaningGibbous',
          Age: 19,
        },
        Temperature: {
          Minimum: { Value: 18.0, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 25.0, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperature: {
          Minimum: { Value: 17.4, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 27.5, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperatureShade: {
          Minimum: { Value: 17.4, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 23.6, Unit: 'C', UnitType: 17 },
        },
        HoursOfSun: 7.3,
        DegreeDaySummary: {
          Heating: { Value: 0.0, Unit: 'C', UnitType: 17 },
          Cooling: { Value: 4.0, Unit: 'C', UnitType: 17 },
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 30,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Particle Pollution',
          },
          { Name: 'Grass', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Mold', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Ragweed', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Tree', Value: 0, Category: 'Low', CategoryValue: 1 },
          {
            Name: 'UVIndex',
            Value: 5,
            Category: 'Moderate',
            CategoryValue: 2,
          },
        ],
        Day: {
          Icon: 3,
          IconPhrase: 'Partly sunny',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '01' },
          ShortPhrase: 'Partly sunny and pleasant',
          LongPhrase: 'Partly sunny and pleasant',
          PrecipitationProbability: 4,
          ThunderstormProbability: 0,
          RainProbability: 4,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 9.3, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 48, Localized: 'NE', English: 'NE' },
          },
          WindGust: {
            Speed: { Value: 14.8, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 84, Localized: 'E', English: 'E' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 43,
          Evapotranspiration: { Value: 0.1, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 2.4, Unit: 'W/m²', UnitType: 33 },
        },
        Night: {
          Icon: 7,
          IconPhrase: 'Cloudy',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '02' },
          ShortPhrase: 'Cloudy',
          LongPhrase: 'Cloudy',
          PrecipitationProbability: 17,
          ThunderstormProbability: 0,
          RainProbability: 17,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 5.6, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 335, Localized: 'NNW', English: 'NNW' },
          },
          WindGust: {
            Speed: { Value: 11.1, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 3, Localized: 'N', English: 'N' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 71,
          Evapotranspiration: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 0.0, Unit: 'W/m²', UnitType: 33 },
        },
        Sources: ['AccuWeather', 'Huafeng'],
        MobileLink:
          'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=2&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=2&unit=c&lang=en-us',
      },
      {
        Date: '2021-10-26T07:00:00+08:00',
        EpochDate: 1635202800,
        Sun: {
          Rise: '2021-10-26T06:07:00+08:00',
          EpochRise: 1635199620,
          Set: '2021-10-26T17:26:00+08:00',
          EpochSet: 1635240360,
        },
        Moon: {
          Rise: '2021-10-26T21:23:00+08:00',
          EpochRise: 1635254580,
          Set: '2021-10-27T11:43:00+08:00',
          EpochSet: 1635306180,
          Phase: 'WaningGibbous',
          Age: 20,
        },
        Temperature: {
          Minimum: { Value: 19.0, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 24.0, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperature: {
          Minimum: { Value: 18.1, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 26.1, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperatureShade: {
          Minimum: { Value: 18.1, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 22.9, Unit: 'C', UnitType: 17 },
        },
        HoursOfSun: 4.5,
        DegreeDaySummary: {
          Heating: { Value: 0.0, Unit: 'C', UnitType: 17 },
          Cooling: { Value: 4.0, Unit: 'C', UnitType: 17 },
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 38,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Particle Pollution',
          },
          { Name: 'Grass', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Mold', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Ragweed', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Tree', Value: 0, Category: 'Low', CategoryValue: 1 },
          {
            Name: 'UVIndex',
            Value: 4,
            Category: 'Moderate',
            CategoryValue: 2,
          },
        ],
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '01' },
          ShortPhrase: 'Pleasant with sun and clouds',
          LongPhrase: 'Pleasant with sun and clouds',
          PrecipitationProbability: 23,
          ThunderstormProbability: 0,
          RainProbability: 23,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 9.3, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 45, Localized: 'NE', English: 'NE' },
          },
          WindGust: {
            Speed: { Value: 13.0, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 75, Localized: 'ENE', English: 'ENE' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 63,
          Evapotranspiration: { Value: 0.1, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 1.3, Unit: 'W/m²', UnitType: 33 },
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '00' },
          ShortPhrase: 'Partly cloudy and warm',
          LongPhrase: 'Partly cloudy and warm',
          PrecipitationProbability: 25,
          ThunderstormProbability: 0,
          RainProbability: 25,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 5.6, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 12, Localized: 'NNE', English: 'NNE' },
          },
          WindGust: {
            Speed: { Value: 11.1, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 79, Localized: 'E', English: 'E' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 29,
          Evapotranspiration: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 0.0, Unit: 'W/m²', UnitType: 33 },
        },
        Sources: ['AccuWeather', 'Huafeng'],
        MobileLink:
          'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=3&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=3&unit=c&lang=en-us',
      },
      {
        Date: '2021-10-27T07:00:00+08:00',
        EpochDate: 1635289200,
        Sun: {
          Rise: '2021-10-27T06:08:00+08:00',
          EpochRise: 1635286080,
          Set: '2021-10-27T17:25:00+08:00',
          EpochSet: 1635326700,
        },
        Moon: {
          Rise: '2021-10-27T22:15:00+08:00',
          EpochRise: 1635344100,
          Set: '2021-10-28T12:30:00+08:00',
          EpochSet: 1635395400,
          Phase: 'WaningGibbous',
          Age: 21,
        },
        Temperature: {
          Minimum: { Value: 19.0, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 24.0, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperature: {
          Minimum: { Value: 17.9, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 27.0, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperatureShade: {
          Minimum: { Value: 17.9, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 22.9, Unit: 'C', UnitType: 17 },
        },
        HoursOfSun: 5.7,
        DegreeDaySummary: {
          Heating: { Value: 0.0, Unit: 'C', UnitType: 17 },
          Cooling: { Value: 4.0, Unit: 'C', UnitType: 17 },
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 40,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Particle Pollution',
          },
          { Name: 'Grass', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Mold', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Ragweed', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Tree', Value: 0, Category: 'Low', CategoryValue: 1 },
          {
            Name: 'UVIndex',
            Value: 5,
            Category: 'Moderate',
            CategoryValue: 2,
          },
        ],
        Day: {
          Icon: 6,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '01' },
          ShortPhrase: 'Mostly cloudy',
          LongPhrase: 'Mostly cloudy',
          PrecipitationProbability: 25,
          ThunderstormProbability: 0,
          RainProbability: 25,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 7.4, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 76, Localized: 'ENE', English: 'ENE' },
          },
          WindGust: {
            Speed: { Value: 11.1, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 85, Localized: 'E', English: 'E' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 60,
          Evapotranspiration: { Value: 0.1, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 0.9, Unit: 'W/m²', UnitType: 33 },
        },
        Night: {
          Icon: 36,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '01' },
          ShortPhrase: 'Partly cloudy and warm',
          LongPhrase: 'Partly cloudy and warm',
          PrecipitationProbability: 25,
          ThunderstormProbability: 0,
          RainProbability: 25,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 7.4, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 24, Localized: 'NNE', English: 'NNE' },
          },
          WindGust: {
            Speed: { Value: 11.1, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 38, Localized: 'NE', English: 'NE' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 69,
          Evapotranspiration: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 0.0, Unit: 'W/m²', UnitType: 33 },
        },
        Sources: ['AccuWeather', 'Huafeng'],
        MobileLink:
          'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=4&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=4&unit=c&lang=en-us',
      },
      {
        Date: '2021-10-28T07:00:00+08:00',
        EpochDate: 1635375600,
        Sun: {
          Rise: '2021-10-28T06:09:00+08:00',
          EpochRise: 1635372540,
          Set: '2021-10-28T17:24:00+08:00',
          EpochSet: 1635413040,
        },
        Moon: {
          Rise: '2021-10-28T23:11:00+08:00',
          EpochRise: 1635433860,
          Set: '2021-10-29T13:15:00+08:00',
          EpochSet: 1635484500,
          Phase: 'WaningGibbous',
          Age: 22,
        },
        Temperature: {
          Minimum: { Value: 17.0, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 24.0, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperature: {
          Minimum: { Value: 17.2, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 26.2, Unit: 'C', UnitType: 17 },
        },
        RealFeelTemperatureShade: {
          Minimum: { Value: 17.2, Unit: 'C', UnitType: 17 },
          Maximum: { Value: 22.7, Unit: 'C', UnitType: 17 },
        },
        HoursOfSun: 6.8,
        DegreeDaySummary: {
          Heating: { Value: 0.0, Unit: 'C', UnitType: 17 },
          Cooling: { Value: 3.0, Unit: 'C', UnitType: 17 },
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 49,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Particle Pollution',
          },
          { Name: 'Grass', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Mold', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Ragweed', Value: 0, Category: 'Low', CategoryValue: 1 },
          { Name: 'Tree', Value: 0, Category: 'Low', CategoryValue: 1 },
          {
            Name: 'UVIndex',
            Value: 5,
            Category: 'Moderate',
            CategoryValue: 2,
          },
        ],
        Day: {
          Icon: 3,
          IconPhrase: 'Partly sunny',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '00' },
          ShortPhrase: 'Partly sunny and nice',
          LongPhrase: 'Partly sunny and nice',
          PrecipitationProbability: 16,
          ThunderstormProbability: 0,
          RainProbability: 16,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 7.4, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 57, Localized: 'ENE', English: 'ENE' },
          },
          WindGust: {
            Speed: { Value: 13.0, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 62, Localized: 'ENE', English: 'ENE' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 40,
          Evapotranspiration: { Value: 0.1, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 0.5, Unit: 'W/m²', UnitType: 33 },
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '00' },
          ShortPhrase: 'Partly cloudy',
          LongPhrase: 'Partly cloudy',
          PrecipitationProbability: 16,
          ThunderstormProbability: 0,
          RainProbability: 16,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: { Value: 5.6, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 1, Localized: 'N', English: 'N' },
          },
          WindGust: {
            Speed: { Value: 9.3, Unit: 'km/h', UnitType: 7 },
            Direction: { Degrees: 50, Localized: 'NE', English: 'NE' },
          },
          TotalLiquid: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Rain: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          Snow: { Value: 0.0, Unit: 'cm', UnitType: 4 },
          Ice: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          HoursOfPrecipitation: 0.0,
          HoursOfRain: 0.0,
          HoursOfSnow: 0.0,
          HoursOfIce: 0.0,
          CloudCover: 19,
          Evapotranspiration: { Value: 0.0, Unit: 'mm', UnitType: 3 },
          SolarIrradiance: { Value: 0.0, Unit: 'W/m²', UnitType: 33 },
        },
        Sources: ['AccuWeather', 'Huafeng'],
        MobileLink:
          'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=5&unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/cn/fuzhou/102244/daily-weather-forecast/102244?day=5&unit=c&lang=en-us',
      },
    ],
  },
  currentCondition: {
    LocalObservationDateTime: '2021-10-24T19:46:00+08:00',
    EpochTime: 1635075960,
    WeatherText: 'Overcast',
    WeatherIcon: 7,
    HasPrecipitation: false,
    PrecipitationType: null,
    LocalSource: { Id: 7, Name: 'Huafeng', WeatherCode: '02' },
    IsDayTime: false,
    Temperature: {
      Metric: { Value: 17.6, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 64.0, Unit: 'F', UnitType: 18 },
    },
    RealFeelTemperature: {
      Metric: { Value: 17.2, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 63.0, Unit: 'F', UnitType: 18 },
    },
    RealFeelTemperatureShade: {
      Metric: { Value: 17.2, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 63.0, Unit: 'F', UnitType: 18 },
    },
    RelativeHumidity: 71,
    IndoorRelativeHumidity: 61,
    DewPoint: {
      Metric: { Value: 12.3, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 54.0, Unit: 'F', UnitType: 18 },
    },
    Wind: {
      Direction: { Degrees: 315, Localized: 'NW', English: 'NW' },
      Speed: {
        Metric: { Value: 7.9, Unit: 'km/h', UnitType: 7 },
        Imperial: { Value: 4.9, Unit: 'mi/h', UnitType: 9 },
      },
    },
    WindGust: {
      Speed: {
        Metric: { Value: 11.1, Unit: 'km/h', UnitType: 7 },
        Imperial: { Value: 6.9, Unit: 'mi/h', UnitType: 9 },
      },
    },
    UVIndex: 0,
    UVIndexText: 'Low',
    Visibility: {
      Metric: { Value: 16.1, Unit: 'km', UnitType: 6 },
      Imperial: { Value: 10.0, Unit: 'mi', UnitType: 2 },
    },
    ObstructionsToVisibility: '',
    CloudCover: 98,
    Ceiling: {
      Metric: { Value: 1067.0, Unit: 'm', UnitType: 5 },
      Imperial: { Value: 3500.0, Unit: 'ft', UnitType: 0 },
    },
    Pressure: {
      Metric: { Value: 1021.0, Unit: 'mb', UnitType: 14 },
      Imperial: { Value: 30.15, Unit: 'inHg', UnitType: 12 },
    },
    PressureTendency: { LocalizedText: 'Steady', Code: 'S' },
    Past24HourTemperatureDeparture: {
      Metric: { Value: 0.2, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 0.0, Unit: 'F', UnitType: 18 },
    },
    ApparentTemperature: {
      Metric: { Value: 18.3, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 65.0, Unit: 'F', UnitType: 18 },
    },
    WindChillTemperature: {
      Metric: { Value: 17.8, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 64.0, Unit: 'F', UnitType: 18 },
    },
    WetBulbTemperature: {
      Metric: { Value: 14.6, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 58.0, Unit: 'F', UnitType: 18 },
    },
    Precip1hr: {
      Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 },
      Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 },
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 },
        Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 },
      },
      PastHour: {
        Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 },
        Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 },
      },
      Past3Hours: {
        Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 },
        Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 },
      },
      Past6Hours: {
        Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 },
        Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 },
      },
      Past9Hours: {
        Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 },
        Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 },
      },
      Past12Hours: {
        Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 },
        Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 },
      },
      Past18Hours: {
        Metric: { Value: 0.0, Unit: 'mm', UnitType: 3 },
        Imperial: { Value: 0.0, Unit: 'in', UnitType: 1 },
      },
      Past24Hours: {
        Metric: { Value: 1.0, Unit: 'mm', UnitType: 3 },
        Imperial: { Value: 0.04, Unit: 'in', UnitType: 1 },
      },
    },
    TemperatureSummary: {
      Past6HourRange: {
        Minimum: {
          Metric: { Value: 17.4, Unit: 'C', UnitType: 17 },
          Imperial: { Value: 63.0, Unit: 'F', UnitType: 18 },
        },
        Maximum: {
          Metric: { Value: 17.9, Unit: 'C', UnitType: 17 },
          Imperial: { Value: 64.0, Unit: 'F', UnitType: 18 },
        },
      },
      Past12HourRange: {
        Minimum: {
          Metric: { Value: 16.8, Unit: 'C', UnitType: 17 },
          Imperial: { Value: 62.0, Unit: 'F', UnitType: 18 },
        },
        Maximum: {
          Metric: { Value: 20.0, Unit: 'C', UnitType: 17 },
          Imperial: { Value: 68.0, Unit: 'F', UnitType: 18 },
        },
      },
      Past24HourRange: {
        Minimum: {
          Metric: { Value: 16.8, Unit: 'C', UnitType: 17 },
          Imperial: { Value: 62.0, Unit: 'F', UnitType: 18 },
        },
        Maximum: {
          Metric: { Value: 20.0, Unit: 'C', UnitType: 17 },
          Imperial: { Value: 68.0, Unit: 'F', UnitType: 18 },
        },
      },
    },
    MobileLink:
      'http://www.accuweather.com/en/cn/fuzhou/102244/current-weather/102244?lang=en-us',
    Link: 'http://www.accuweather.com/en/cn/fuzhou/102244/current-weather/102244?lang=en-us',
  },
};

export default mockData;
