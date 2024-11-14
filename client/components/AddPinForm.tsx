import React , {useState} from 'react'
import { PinData } from '../../models/pins.models.ts'
import { useAddPin } from '../hooks/usePins.ts'


function AddPinForm() {
  
  const [formData, setFormData] = useState<PinData>({
    name: '',
    description: '',
    lat: 0,
    long: 0,
    user: ''
  })

  const { mutate: createPin} = useAddPin()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'lat' || name === 'long' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createPin(formData);
      setFormData({
        name: '',
        description: '',
        lat: 0,
        long: 0,
        user: ''
      })
    } catch (error) {
      console.error("Problem adding pin:", error)
    }
  }

  return (
    <div>
      <h2>Add Pin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Pin Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lat">Latitude:</label>
          <input type="number" id="lat" name="lat" value={formData.lat} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="long">Longitude:</label>
          <input type="number" id="long" name="long" value={formData.long} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="user">User :</label>
          <input type="text" id="user" name="user" value={formData.user} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
export default AddPinForm