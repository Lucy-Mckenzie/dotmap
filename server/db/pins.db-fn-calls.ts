import db from './connection.ts'
import { Pin, PinData } from '../../models/pins.models.ts'

export async function getAllPins() {
  const pins = await db('pins').select()
  return pins as Pin[]
}

export async function getPinById(id: number | string) {
  const pin = await db('pins').select().first().where({ id })
  return pin as Pin
}

export async function addPin(data: PinData) {
  const [id] = await db('pins').insert(data)
  return id
}

export async function deletePinById(id: number) {
    return await db('pins').where({id}).del() 
}

export async function updatePin(pin: Pin){
  const [updatedPin] = await db('pins')
    .where({ id: pin.id })
    .update(pin)
    .returning('*')
  return updatedPin
}

export async function getPinsByUser(user: string) {
  console.log(user)
  const pins = await db('pins').select('*').where({ user })
  return pins as Pin[]
}