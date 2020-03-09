import React from "react";
import {  TileLayer } from "react-leaflet";
import { MapStyle } from './map.style';



class MapComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      lat: 43.354444,
      lng: -5.85166,
      zoom: 12
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <MapStyle center = {position} zoom = {this.state.zoom} > 
        <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapStyle>
    );
  }
}

export default MapComponent;