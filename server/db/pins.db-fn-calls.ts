import db from './connection.ts'
import { Pin, PinData } from '../../models/pins.models.ts'

export async function getAllPins() {
  const fruit = await db('pins').select()
  return fruit as Pin[]
}

export async function getPinById(id: number | string) {
  const fruit = await db('pins').select().first().where({ id })
  return fruit as Pin
}

export async function addPin(data: PinData) {
  const [id] = await db('pins').insert(data)
  return id
}

export async function deletePinById(id: number) {
    return await db('pins').where({id}).del() 
}