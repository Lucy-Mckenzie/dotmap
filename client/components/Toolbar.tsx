interface Props {
  addPinHandler: () => void
}

export default function Toolbar({ addPinHandler }: Props) {
  const handleAuth = async () => {
    // Add async authentication logic here
    console.log('Toggling login/logout...')
  }

  return (
    <div className="flex h-12 w-full items-center justify-between border-b border-black bg-gray-100 px-4">
      <button
        onClick={() => addPinHandler()}
        className="rounded-md border border-black px-4 py-1 text-blue-500 hover:text-blue-700"
      >
        Add New Pin
      </button>

      <h1 className="text-lg font-semibold text-gray-800">.Map</h1>

      <button
        onClick={handleAuth}
        className="rounded-md border border-black px-4 py-1 text-blue-500 hover:text-blue-700"
      >
        Login/Logout
      </button>
    </div>
  )
}
