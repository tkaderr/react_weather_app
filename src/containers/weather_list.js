import React, { Component } from 'react';
import {connect} from 'react-redux';


class WeatherList extends Component {

  //so state.weather is an array of weather objects.
  //taking one of the weather objects in the array (through the map function) to pass into renderWeather
  //cityData is the object that has all the weather info for that one city in the array
  renderWeather(cityData){
    return (
        <tr key ={cityData.city.name}>
          <td>{cityData.city.name}</td>
        </tr>
    );
  }

  render(){
    return (
      <table className = "table table-hover">
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

//weather key is named that same as the root reducer weather
function mapStateToProps(state){
  return { weather: state.weather};
}

//need to get data/ interact weatherlist component with redux
//so now we have access to weather data through props
export default connect(mapStateToProps)(WeatherList);
