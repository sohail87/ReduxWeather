import React, {Component} from 'react'
import {connect} from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = cityData.list.map(item => item.main.temp)
    const pressures = cityData.list.map(item => item.main.pressure)
    const humidities = cityData.list.map(item => item.main.humidity)
    return (
      <tr key={cityName}>
        <td className="graph-city">{cityName}</td>
        <td className="graph">
          <Chart data={temps} colour="orange"/>
        </td>
        <td className="graph">
          <Chart data={pressures} colour="black"/>
        </td>
        <td className="graph">
          <Chart data={humidities} colour="blue"/>
        </td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
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

function mapStateToProps({weather}) {
  return {weather}; //{ weather: weather}
}

export default connect(mapStateToProps)(WeatherList)
