export interface ICountyForecast {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: "C";
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: "C";
      UnitType: number;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: true;
    PrecipitationType: string;
    PrecipitationIntensity: string;
  };
  Sources: string[];
  MobileLink: string;
  Link: string;
}
