import axios from "axios";
import { ICountyWeather } from "../types/ICountyWeather";
import { ICountyForecast } from "../types/ICountyForecast";

const API_URL = "https://dataservice.accuweather.com";

const API_KEY = "9l0F0wPAD4hBIorNmnQC98VTJ9zX6z6V";

export async function getCountyWeather(key: string): Promise<ICountyWeather> {
  const params = {
    apikey: API_KEY,
    details: true,
  };
  const result = await axios.get(`${API_URL}/currentconditions/v1/${key}`, {
    params,
  });

  if (!result.data || result.data.length === 0) {
    throw new Error("Data not found");
  }

  return result.data[0];
}

export async function getCountyForecast(
  key: string,
): Promise<ICountyForecast[]> {
  const params = {
    apikey: API_KEY,
    metric: true,
  };
  const result = await axios.get(`${API_URL}/forecasts/v1/daily/5day/${key}`, {
    params,
  });

  if (
    !result.data ||
    !result.data.DailyForecasts ||
    result.data.DailyForecasts.length === 0
  ) {
    throw new Error("Data not found");
  }

  return result.data.DailyForecasts;
}
