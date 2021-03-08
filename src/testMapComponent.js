//import hook providing the Leaflet Map instance in any descendant of a MapContainer
import {useMap} from 'react-leaflet';
//import hook attaching the provided event handlers to the Map instance and returning the instance in any descendant of a MapContainer
import {useMapEvents} from 'react-leaflet';
//import hook attaching a single event handler to the Map instance and returning the instance in any descendant of a MapContainer
import {useMapEvent} from 'react-leaflet';

function TestMapComponent(){
    
    const map=useMap()
    console.log('center: '+map.getCenter())
    
    const mapEvents=useMapEvents({
	click:()=>{
	    mapEvents.locate()
	},
	locationfound:(location)=>{
	    console.log('location found: '+location)
	}
    })
/*
    const mapEvent=useMapEvent('click',()=>{
	console.log('set center')
	mapEvent.setCenter([50.5, 30.5])
    })
*/
    return null
}
export default TestMapComponent


