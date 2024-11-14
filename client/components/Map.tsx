import * as L from 'leaflet'
import { useEffect } from 'react'

export default function Map() {
  useEffect(() => {
    const map = L.map('map').setView([-39.2806, 176.912], 8)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)
  }, [])

  return (
    <div
      id="map"
      className="h-lvh w-dvw"
      aria-label="Map displaying the Great Walks of New Zealand"
    ></div>
  )
}
