import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    console.log(cityData.list.map((weather)=>weather.main.temp));
    return (
      <tr>
        <td>{name}</td>
        <td>
          <Sparklines data={cityData.list.map((weather)=>weather.main.temp)} height={120} width={180}>
            <SparklinesLine color="blue"/>
          </Sparklines>
        </td>
        <td>{cityData.list[0].main.temp}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Header</th>
            <th>Humidity</th>
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
