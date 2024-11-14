import Map from './components/Map'
import Toolbar from './components/Toolbar'
// import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <div className="flex flex-col">
      <Toolbar />
      <Map />
    </div>
  )
}

export default App
