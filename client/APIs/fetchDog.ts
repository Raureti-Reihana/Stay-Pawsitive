import request from 'superagent'
import { dogPictures } from '../models/fetchDog'

export async function fetchDog(): Promise<dogPictures> {
  try {
    const res = await request.get(`https://dog.ceo/api/breeds/image/random`)

    return res.body
  } catch (error) {
    console.error('Error finding dog', error)
    throw error
  }
}