import React, { useState } from 'react'
import { PinData } from '../../models/pins.models.ts'
import { useAddPin } from '../hooks/usePins.ts'

function AddPinForm({ active, data }: { active: boolean; data: any }) {
  const [formData, setFormData] = useState<PinData>({
    name: '',
    description: '',
    lat: 0,
    long: 0,
    user: 'zakhynd',
  })

  const { mutate: createPin } = useAddPin()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'lat' || name === 'long' ? parseFloat(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const obj = {
      ...formData,
      lat: data.lat,
      long: data.lng,
    }

    createPin(obj)

    // setFormData({
    //   name: '',
    //   description: '',
    //   lat: 0,
    //   long: 0,
    //   user: '',
    // })
  }

  if (!active) return null

  return (
    <div className="absolute left-1/2 top-1/2 z-[1000] rounded-sm bg-white p-4 shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="form-group flex flex-col">
          <label htmlFor="name">Pin Name:</label>
          <input
            className="rounded-sm bg-blue-400 px-2 py-1 text-white"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-4 flex flex-col">
          <label htmlFor="description">Description:</label>
          <input
            className="rounded-sm bg-blue-400 px-2 py-1 text-white"
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button
          className="mt-6 rounded-sm bg-blue-400 px-2 py-1 text-white"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  )
}
export default AddPinForm
