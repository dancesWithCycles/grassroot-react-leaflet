import React from "react";
import { MapContainer as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
// map is BROKEN without zoom attribute
import 'leaflet/dist/leaflet.css';
// map is invisible without the following CSS
import './map.css';

const URL="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
const ATTRIBUTION="&copy; <a href=http://osm.org/copyright>OpenStreetMap</a> contributors"

const TOWER_LOCATION = [43.385807, -8.406524];

const MyMap = () => (
  <LeafletMap center={TOWER_LOCATION} zoom={16}>
    <TileLayer url={URL} attribution={ATTRIBUTION} />
    <Marker position={TOWER_LOCATION}>
      <Popup>
        <b>Tower of Hercules</b>
        <br />
        UNESCO World Heritage site
      </Popup>
    </Marker>
  </LeafletMap>
);

export default MyMap;
