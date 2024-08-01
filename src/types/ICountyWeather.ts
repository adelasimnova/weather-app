export interface ICountyWeather {
  LocalObservationDateTime: string;
  WeatherText: string;
  WeatherIcon: number;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: "C";
    };
  };
  RealFeelTemperature: {
    Metric: {
      Value: number;
      Unit: "C";
      Phrase: string;
    };
  };
  RealFeelTemperatureShade: {
    Metric: {
      Value: number;
      Unit: "C";
      Phrase: string;
    };
  };
  RelativeHumidity: number;
  IndoorRelativeHumidity: number;
  Wind: {
    Direction: {
      Degrees: number;
      Localized: "N" | "S" | "E" | "W";
    };
    Speed: {
      Metric: {
        Value: number;
        Unit: "km/h";
      };
    };
  };
  WindGust: {
    Speed: {
      Metric: {
        Value: number;
        Unit: "km/h";
      };
    };
  };
  UVIndex: number;
  UVIndexText: string;
  Visibility: {
    Metric: {
      Value: number;
      Unit: "km";
    };
  };
  CloudCover: number;
  Pressure: {
    Metric: {
      Value: string;
      Unit: "mb";
    };
  };
  PressureTendency: {
    LocalizedText: string;
  };
  Link: string;
}
