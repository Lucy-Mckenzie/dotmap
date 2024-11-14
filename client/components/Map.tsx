import { usePins } from '../hooks/usePins'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Map() {
  const { data: pins, error, isPending } = usePins()

  if (isPending) return <p>Loading...</p>
  if (error) return <p>Error loading pins data.</p>

  return (
    <>
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

        {pins.map((pin) => (
          <Marker
            key={pin.id}
            position={[pin.lat, pin.long]}
            title={`Marker for ${pin.name}`}
          >
            <Popup>
              <p>Name: {pin.name}</p>
              <p>Description: {pin.description}</p>
              <p>User: {pin.user}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>

  )
}
