import { Router } from 'express'
// import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/pins.db-fn-calls.ts'
import { Pin, PinData } from '../../models/pins.models.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const pins = await db.getAllPins()

    // res.json({ pins: pins.map((pin) => pin.name) })
    res.json(pins)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const pin = await db.getPinById(req.params.id)
    if (!pin){ throw new Error}
    res.json(pin)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res) => {
//ToDoLater: AuthZ
// router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  // if (!req.auth?.sub) {
  //   res.sendStatus(StatusCodes.UNAUTHORIZED)
  //   return
  // }

  try {
    const { lat, long, name, description, user } = req.body
    if (!lat || !long ) {
      return res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const id = await db.addPin({ lat, long, name, description, user })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .status(StatusCodes.CREATED).json(id)
  } catch (err) {
    console.error('unknown error')
    res.status(500)
    //next(err) //uncomment with the addition of AuthZ
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.deletePinById(Number(id))
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  const id = +req.params.id
  const updateData: PinData = req.body
  try {
    const patchedPin: Pin = await db.updatePin({ id: id, ...updateData })
    
    if (patchedPin) {
      res.status(200).json({ message: 'Pin updated successfully', pin: patchedPin });
    } else {
      res.status(404).json({ message: 'Pin not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the pin' });
  }
})

export default router
