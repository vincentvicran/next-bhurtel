import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

interface MapProps {
  location: [number, number]
  height?: number
  popupText?: string
}

export const Map = ({location, height = 400, popupText}: MapProps) => {
  return (
    <MapContainer
      center={location}
      zoom={14}
      scrollWheelZoom={false}
      style={{height, width: '100%', zIndex: 0}}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location}>
        {popupText && <Popup>{popupText}</Popup>}
      </Marker>
    </MapContainer>
  )
}
