import React, {Component} from 'react'
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {

  renderWeather(cityData) {
    function convertKelvinToCelsius(kelvin) {
      return kelvin - 273.15
    }
    const cityName = cityData.city.name;
    const temps = _.map(_.take((cityData.list.map(item => item.main.temp)),8), convertKelvinToCelsius)
    const pressures = _.take(cityData.list.map(item => item.main.pressure),8)
    const humidities = _.take(cityData.list.map(item => item.main.humidity),8)
    const startDateTime = _.first(cityData.list).dt_txt
    const endDateTime = cityData.list[7].dt_txt
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td >
          <GoogleMap lon={lon} lat={lat}/>
        </td>
        <td >
          From: {startDateTime}
          <Chart data={temps} colour="orange" units="C"/>
        </td>
        <td >
          To: {endDateTime}
          <Chart data={pressures} colour="black" units="hPa"/>
        </td>
        <td >
          <Chart data={humidities} colour="blue" units="%"/>
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
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
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

function mapStateToProps({weather}) {
  return {weather}; //{ weather: weather}
}

export default connect(mapStateToProps)(WeatherList)
