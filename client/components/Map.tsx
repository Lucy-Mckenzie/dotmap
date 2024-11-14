// import * as L from 'leaflet'
// import { useEffect } from 'react'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Map() {
  /*
  useEffect(() => {
    // map layer, coords, zoom level
    const map = L.map('map').setView([-39.2806, 176.912], 8)

    // open street map
    const osm = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    ).addTo(map)

    // world imagery map
    const worldImagery = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      },
    )

    // creating a draggable marker
    const marker = L.marker([-39.2806, 176.912], { draggable: true }).addTo(map)
    const marker1 = L.marker([-39.2804, 176.913], { draggable: true }).addTo(
      map,
    )

    // event listener when marker is dragged
    marker.on('dragend', function (e) {
      const position = e.target.getLatLng()
      marker
        .setLatLng(position)
        .bindPopup('New position ' + position.toString())
    })

    // show a pop up when map is clicked
    const popup = L.popup()

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map)
    }
    map.on('click', onMapClick)

    // base map and pin to toggle between maps and pin
    const baseMaps = {
      OpenStreetMap: osm,
      WorldImagery: worldImagery,
    }
    // pin controller
    const overlayMaps = {
      Marker: marker,
      Marker1: marker1,
    }
    // applies nav to toggle between pin (on/off), different map styles
    L.control.layers(baseMaps, overlayMaps).addTo(map)
  }, [])
  */

  return (
    // <div
    //   id="map"
    //   className="h-lvh w-lvw"
    //   aria-label="Map displaying New Zealand"
    // ></div>

    <MapContainer
      className="h-lvh w-lvw"
      center={[-39.2806, 176.912]}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* 
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  )
}
