import { Router } from 'express'
// import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/pins.db-fn-calls.ts'

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
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    console.error('unknown error')
    res.status(500)
    //next(err) //uncomment with the addition of AuthZ
  }
})

export default router
