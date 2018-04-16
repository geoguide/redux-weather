import React from 'react';
/*global google:true*/

class Map extends React.Component {
  componentDidMount() {
    new google.maps.Map(this.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div ref={(map) => { this.map = map } } />;
  }
};

export default Map;
