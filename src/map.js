/*
Copyright (C) 2021  Stefan Begerad

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import React from 'react';  
// map is invisible without the following CSS
import './map.css';
import  {MapContainer,TileLayer,LayersControl} from 'react-leaflet';
// map is BROKEN without zoom attribute
import 'leaflet/dist/leaflet.css';

const Map=()=>
{
    return(
        <MapContainer
        className="map"
        // map is invisible without center attribute
        center={[0,0]}
        // map is invisible without zoom attribute
        zoom={2}>
                
	    <LayersControl>

	    <LayersControl.BaseLayer name="OpenStreetMap" checked>
            <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=http://osm.org/copyright>OpenStreetMap</a> contributors"
	    />
	    </LayersControl.BaseLayer>

	</LayersControl>

	</MapContainer>
        ); 
}
export default Map;
