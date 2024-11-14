import * as L from 'leaflet'
import { useEffect } from 'react'


export default function Map() {
  useEffect(() => {
    const map = L.map('map').setView([-39.2806, 176.9120], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  
}, [])

 return (
  <div className="map-container">
  <div id="map" className="map" aria-label="Map displaying the Great Walks of New Zealand"></div>
  </div>
 )
}

