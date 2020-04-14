import React from "react";
import L from "leaflet";
import { TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import { Rutas } from "../../viade/Model";
import ReactDOM from "react-dom";
import { MapStyle, DivStyle } from "./map.style";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Map extends React.Component {

  constructor() {
    super();
    this.name = Rutas.getNames()[0];
    this.puntos = []
    Rutas.getRutaByPosition(1).points.map(p => this.puntos.push(p.getCoordinates()));
  }

  getRoutes(id) {


    var newRuta = Rutas.getRutaByName(id);
    document.getElementById("name").textContent = newRuta.name;

    this.puntos = newRuta.point;
    const position = this.puntos[0];

    var update = <MapStyle id="map" center={position} zoom={15} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline color={'red'} positions={this.puntos}></Polyline>
      <Marker position={this.puntos[0]}>
        <Popup>Inicio</Popup>
      </Marker>
      <Marker position={this.puntos[this.puntos.length - 1]}>
        <Popup>Fin</Popup>
      </Marker>
    </MapStyle>;

    ReactDOM.render(update, document.getElementById('map'));
  }

  render() {
    Rutas.actualizarRutasConPod();
    const position = this.puntos[0];
    return (

      <React.Fragment >
          <DivStyle>
            <h2 data-testid="map-title" id="name">{this.name}</h2>
            <ul data-testid="map-routes-list">{Rutas.getNames().map((n, i) => <li key={i} onClick={() => this.getRoutes(n)}> {n} </li>)}</ul>
          </DivStyle>
          <MapStyle data-testid="map-map" id="map" center={position} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polyline color={'red'} positions={this.puntos}></Polyline>
            <Marker position={this.puntos[0]}>
              <Popup>Inicio</Popup>
            </Marker>
            <Marker position={this.puntos[this.puntos.length - 1]}>
              <Popup>Fin</Popup>
            </Marker>
          </MapStyle>
      </React.Fragment>

    );
  }
}

export default Map;
