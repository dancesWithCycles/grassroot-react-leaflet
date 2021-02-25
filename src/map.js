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

// using tile layer from NASA GIBS Blue Marble
// source for tile layer:
// https://egghead.io/lessons/react-change-the-map-tile-service-of-a-react-leaflet-tilelayer-basemap-to-nasa-gibs-blue-marble

const THUNDERFORESTS = [
    {
	name:'Transport',
        url:'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=312bb27dc68d4405bfec59ca96d263ab',
        attribution:'Maps &copy; <a href=http://www.thunderforest.com>Thunderforest</a>, Data &copy; <a href=http://www.openstreetmap.org/copyright>OpenStreetMap contributors</a>'
    },
    {
	name:'Transport Dark',
        url:'https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=312bb27dc68d4405bfec59ca96d263ab',
        attribution:'Maps &copy; <a href=http://www.thunderforest.com>Thunderforest</a>, Data &copy; <a href=http://www.openstreetmap.org/copyright>OpenStreetMap contributors</a>',
    },
    {
	name:'Pioneer',
	url:'https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=312bb27dc68d4405bfec59ca96d263ab',
        attribution:'Maps &copy; <a href=http://www.thunderforest.com>Thunderforest</a>, Data &copy; <a href=http://www.openstreetmap.org/copyright>OpenStreetMap contributors</a>',
    },
    {
	name:'Mobile Atlas',
	url:'https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=312bb27dc68d4405bfec59ca96d263ab',
	attribution:'Maps &copy; <a href=http://www.thunderforest.com>Thunderforest</a>, Data &copy; <a href=http://www.openstreetmap.org/copyright>OpenStreetMap contributors</a>',
    },
    {
	name:'Atlas',
	url:'https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=312bb27dc68d4405bfec59ca96d263ab',
	attribution:'Maps &copy; <a href=http://www.thunderforest.com>Thunderforest</a>, Data &copy; <a href=http://www.openstreetmap.org/copyright>OpenStreetMap contributors</a>'
    },
];

const TBaseLayer = ({name, url, attribution, tileParams}) => (
	<LayersControl.BaseLayer name={name}>
	<TileLayer
    url={url} attribution={attribution} {...tileParams} />
    </LayersControl.BaseLayer>
);

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

	    <LayersControl.BaseLayer name="OSM Standard" checked>
            <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=http://osm.org/copyright>OpenStreetMap</a> contributors"
	    />
	    </LayersControl.BaseLayer>

        {THUNDERFORESTS.map(function(o) {
	    const {name, url, attribution, ...tileParams}=o;
	    return <TBaseLayer name={name} url={url} attribution={attribution} tileParams={tileParams}/>;
        })
	}

	</LayersControl>

	</MapContainer>
        ); 
}
export default Map;
