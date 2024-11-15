import { useState } from 'react'
import Map from './components/Map'
import Toolbar from './components/Toolbar'
// import AddPinForm from './components/AddPinForm'

function App() {
  const [addPinActive, setAddPinActive] = useState(false)

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Toolbar addPinHandler={() => setAddPinActive(true)} />
      <Map addPinActive={addPinActive} />
    </div>
  )
}

export default App
