import axios from "axios";
import { ICountyData } from "../types/ICountyData";

const API_URL = "http://dataservice.accuweather.com/currentconditions/v1";

const API_KEY = "9l0F0wPAD4hBIorNmnQC98VTJ9zX6z6V";

export async function getCountyData(key: string): Promise<ICountyData> {
  const params = {
    apikey: API_KEY,
    details: true,
  };
  const result = await axios.get(`${API_URL}/${key}`, { params });

  return result.data[0];
}
