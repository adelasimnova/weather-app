import "./ForecastTable.css";
import { ICountyForecast } from "../../types/ICountyForecast";
import { getIconURL } from "../../utils/get-icon";

interface IProps {
  countyForecastDays: ICountyForecast[];
}

export default function ForecastTable(props: IProps) {
  return (
    <div className="forecast-table-wrapper">
      <h2>Weather forecast</h2>
      <table className="data-table forecast-table">
        <tbody>
          {props.countyForecastDays.map((item) => (
            <tr key={item.Date}>
              <td className="data-table-cell">
                {new Date(item.Date).toDateString()}
              </td>
              <td className="data-table-cell forecast-image-wrapper">
                <img
                  src={getIconURL(item.Day.Icon)}
                  className="forecast-image"
                ></img>
              </td>

              <td className="data-table-cell phrase-table-cell">
                <span className="phrase-table-cell-data">
                  {item.Day.IconPhrase}
                </span>
                <span>{item.Temperature.Maximum.Value} °C</span>
              </td>
              <td className="data-table-cell forecast-image-wrapper">
                <img
                  src={getIconURL(item.Night.Icon)}
                  className="forecast-image"
                ></img>
              </td>
              <td className="data-table-cell phrase-table-cell">
                <span className="phrase-table-cell-data">
                  {item.Night.IconPhrase}
                </span>
                <span>{item.Temperature.Minimum.Value} °C</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
