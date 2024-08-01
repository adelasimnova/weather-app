import { useState, useEffect } from "react";
import "./App.css";
import Select from "react-select";
import { getCountyForecast, getCountyWeather } from "../../services/api";
import { ICountyWeather } from "../../types/ICountyWeather";
import DataTable from "../DataTable/DataTable";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { ICountyForecast } from "../../types/ICountyForecast";
import ForecastTable from "../ForecastTable/ForecastTable";
import { getIconURL } from "../../utils/get-icon";

interface ICounty {
  label: string;
  value: string;
}

const counties: Array<ICounty> = [
  {
    label: "Bratislava",
    value: "297345",
  },
  {
    label: "Trnava",
    value: "300977",
  },
  {
    label: "Nitra",
    value: "299645",
  },
  {
    label: "Trenčín",
    value: "300914",
  },
  {
    label: "Žilina",
    value: "301459",
  },
  {
    label: "Banská Bystrica",
    value: "297121",
  },
  {
    label: "Prešov",
    value: "300226",
  },
  {
    label: "Košice",
    value: "298738",
  },
];

function App() {
  const [selectedCounty, setCounty] = useState(counties[0]);

  const [countyData, setCountyData] = useState<ICountyWeather | null>(null);

  const [countyForecastDays, setCountyForecastDays] = useState<
    ICountyForecast[] | null
  >(null);

  const [loadingWeather, setLoadingWeather] = useState<boolean>(false);
  const [loadingForecast, setLoadingForecast] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setCountyData(null);
    setCountyForecastDays(null);
    setError(null);

    setLoadingWeather(true);
    getCountyWeather(selectedCounty.value)
      .then((countyData) => {
        setCountyData(countyData);
        setLoadingWeather(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoadingWeather(false);
      });

    setLoadingForecast(true);
    getCountyForecast(selectedCounty.value)
      .then((forecast) => {
        setCountyForecastDays(forecast);
        setLoadingForecast(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoadingForecast(false);
      });
  }, [selectedCounty]);

  function handleCountyChange(selectedValue: ICounty | null) {
    if (selectedValue !== null) {
      setCounty(selectedValue);
    }
  }

  return (
    <>
      <div
        className={`app-container ${countyData?.IsDayTime === true || countyData?.IsDayTime === undefined ? "" : "nighttime"}`}
      >
        {(loadingWeather || loadingForecast) && <LoadingScreen />}
        <div className="app">
          <div className="select-container">
            <Select
              defaultValue={selectedCounty}
              onChange={handleCountyChange}
              options={counties}
            />
          </div>
          {error && <p className="error-message">{error}</p>}

          {countyData && (
            <>
              <div className="overview">
                <div className="overview-left">
                  <img
                    src={getIconURL(countyData.WeatherIcon)}
                    className="weather-image"
                  ></img>
                </div>
                <div className="overview-right">
                  <h1>{countyData.WeatherText}</h1>
                  <h1>{countyData.Temperature.Metric.Value} °C</h1>
                </div>
              </div>
              <DataTable countyData={countyData}></DataTable>
            </>
          )}
          {countyForecastDays && (
            <ForecastTable
              countyForecastDays={countyForecastDays}
            ></ForecastTable>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
