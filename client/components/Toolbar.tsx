export default function Toolbar() {
  const handleNewPin = async () => {
    // Add async pin creation logic here
    console.log('Adding a new pin...')
  }

  const handleAuth = async () => {
    // Add async authentication logic here
    console.log('Toggling login/logout...')
  }

  return (
    <div className="flex h-12 w-full items-center justify-between bg-gray-100 border-b border-black px-4">
      <button 
        onClick={handleNewPin} 
        className="px-4 py-1 border border-black rounded-md text-blue-500 hover:text-blue-700"
      >
        Add New Pin
      </button>
      
      <h1 className="text-lg font-semibold text-gray-800">.Map</h1>
      
      <button 
        onClick={handleAuth} 
        className="px-4 py-1 border border-black rounded-md text-blue-500 hover:text-blue-700"
      >
        Login/Logout
      </button>
    </div>
  )
}
