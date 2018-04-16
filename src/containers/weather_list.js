import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends React.Component {
  renderWeather(cityData) {

    const name = cityData.city.name;
    const { lon, lat } = cityData.city.coord;
    const temps = cityData.list.map((weather)=>weather.main.temp);
    const humidity = cityData.list.map((weather)=>weather.main.humidity);
    const pressure = cityData.list.map((weather)=>weather.main.pressure);

    return (
      <tr>
        <td>
          <Map lon={lon} lat={lat} />
        </td>
        <td>
          <Chart
            data={temps}
            color="red"
            units="K"
          />
        </td>
        <td>
          <Chart
            data={humidity}
            color="green"
            units="hPa"
          />
        </td>
        <td>
          <Chart
            data={pressure}
            color="orange"
            units="%"
          />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp (K)</th>
            <th>Header (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
