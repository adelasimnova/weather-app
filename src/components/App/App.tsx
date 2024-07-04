import { useState, useEffect } from "react";
import "./App.css";
import Select from "react-select";
import { getCountyData } from "../../services/api";
import { ICountyData } from "../../types/ICountyData";
import DataTable from "../DataTable/DataTable";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

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

  const [countyData, setCountyData] = useState<ICountyData | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setCountyData(null);
    setError(null);
    setLoading(true);
    getCountyData(selectedCounty.value)
      .then((countyData) => {
        setCountyData(countyData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [selectedCounty]);

  function handleCountyChange(selectedValue: ICounty | null) {
    if (selectedValue !== null) {
      setCounty(selectedValue);
    }
  }

  function getIconURL(weatherIcon: number): string {
    const iconNumberStringified = ("0" + weatherIcon).slice(-2);
    return `https://developer.accuweather.com/sites/default/files/${iconNumberStringified}-s.png`;
  }

  return (
    <div
      className={`app-container ${countyData?.IsDayTime === true || countyData?.IsDayTime === undefined ? "" : "nighttime"}`}
    >
      <div className="app">
        <div className="select-container">
          <Select
            defaultValue={selectedCounty}
            onChange={handleCountyChange}
            options={counties}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {loading && <LoadingScreen />}
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
      </div>
    </div>
  );
}

export default App;
