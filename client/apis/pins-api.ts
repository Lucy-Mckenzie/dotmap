import request from 'superagent'
import { Pin } from '../../models/pins.models'

export async function getAllPins() {
  const result = await request.get('/api/v1/pins')
  return result.body as Pin[]
}
