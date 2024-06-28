import "./DataTable.css";
import { ICountyData } from "../../types/ICountyData";

interface IProps {
  countyData: ICountyData;
}

function DataTable(props: IProps) {
  return (
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
      <tfoot>
        <tr>
          <td>Last updated</td>

          <td>
            {new Date(props.countyData.LocalObservationDateTime).toString()}
          </td>
        </tr>
        <tr>
          <td>
            <a href={props.countyData.Link} target="_blank">
              Show more info
            </a>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default DataTable;
