import React, {Component} from 'react';


//i can use ref to get access to html element
//the first argument is the location where the map will be embedded
class GoogleMap extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom:12,
      center: {
        lat:this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render(){
      return <div ref = "map" />;
  }
}

export default GoogleMap;
