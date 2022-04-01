import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

class Mapcard extends Component {
  state = {};
  render() {
    return (
      <div id="map" className="6u">
        <MapContainer
          center={[39.68338489961963, -75.75779009940541]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[39.68338489961963, -75.75779009940541]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

export default Mapcard;
