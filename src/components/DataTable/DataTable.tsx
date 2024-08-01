import "./DataTable.css";
import { ICountyWeather } from "../../types/ICountyWeather";

interface IProps {
  countyData: ICountyWeather;
}

export default function DataTable(props: IProps) {
  return (
    <>
      <table className="data-table">
        <tbody>
          <tr>
            <td className="data-table-cell">Real Feel Temperature</td>
            <td className="data-table-cell">
              {props.countyData.RealFeelTemperature.Metric.Value} °C
            </td>
          </tr>
          <tr>
            <td className="data-table-cell">UV Index</td>
            <td className="data-table-cell">
              {`${props.countyData.UVIndex} (${props.countyData.UVIndexText})`}
            </td>
          </tr>
          <tr>
            <td className="data-table-cell">Wind</td>
            <td className="data-table-cell">
              {props.countyData.Wind.Speed.Metric.Value} km/h
            </td>
          </tr>
          <tr>
            <td className="data-table-cell">Wind Direction</td>
            <td className="data-table-cell">
              {props.countyData.Wind.Direction.Localized}
            </td>
          </tr>
          <tr>
            <td className="data-table-cell">Relative Humidity</td>
            <td className="data-table-cell">
              {props.countyData.RelativeHumidity} %
            </td>
          </tr>
          <tr>
            <td className="data-table-cell">Visibility</td>
            <td className="data-table-cell">
              {props.countyData.Visibility.Metric.Value} km
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Last updated:{" "}
        {new Date(props.countyData.LocalObservationDateTime).toString()}
      </p>
      <a href={props.countyData.Link} target="_blank">
        Show more info
      </a>
    </>
  );
}
