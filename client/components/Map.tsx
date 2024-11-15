import { useEffect, useState } from 'react'
import { usePins } from '../hooks/usePins'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import AddPinForm from './AddPinForm'

interface Props {
  addPinActive: boolean
}

export default function Map({ addPinActive }: Props) {
  const { data: pins, error, isPending } = usePins()
  const [test, setTest] = useState(false)

  useEffect(() => {
    if (addPinActive) handleNewPin()
  }, [addPinActive])

  if (isPending) return <p>Loading...</p>
  if (error) return <p>Error loading pins data.</p>

  const handleNewPin = () => setTest(true)

  return (
    <MapContainer
      className="h-[calc(100lvh-3rem)] w-lvw"
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
      {test && <LocationMarker />}
    </MapContainer>
  )
}

function LocationMarker() {
  const [position, setPosition] = useState(null)

  const map = useMapEvents({
    click(event) {
      if (position !== null) return
      setPosition(event.latlng)
      map.flyTo(event.latlng, map.getZoom())
      // map.locate()
    },
  })

  return position === null ? null : (
    <>
      <AddPinForm active={true} data={position} />
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    </>
  )
}
