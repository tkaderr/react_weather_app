import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
//import {Sparklines, SparklinesLine} from 'react-sparklines';


class WeatherList extends Component {

  //so state.weather is an array of weather objects.
  //taking one of the weather objects in the array (through the map function) to pass into renderWeather
  //cityData is the object that has all the weather info for that one city in the array
  renderWeather(cityData){

    //to get the chart data, we need to map over the appropriate data so we can use the sparkline to generate the table.
    //for temperature, we need to map through list to get to the array of objects and then get temp through main.
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);


    return (
        <tr key ={cityData.city.name}>
          <td>{cityData.city.name}</td>
          <td><Chart data = {temps} color= "orange" units="k"/></td>
          <td><Chart data = {pressures} color= "green" units="hpa"/></td>
          <td><Chart data = {humidities} color= "black" units="%"/></td>
        </tr>
    );
  }

  render(){
    return (
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

//weather key is named that same as the root reducer weather
function mapStateToProps(state){
  return { weather: state.weather};
}

//need to get data/ interact weatherlist component with redux
//so now we have access to weather data through props
export default connect(mapStateToProps)(WeatherList);
