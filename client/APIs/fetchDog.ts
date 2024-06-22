import request from 'superagent'
import { dogPictures } from '../models/fetchDog'

export async function fetchDog(): Promise<dogPictures> {
  try {
    const res = await request.get(`https://dog.ceo/api/breeds/image/random/5`)

    return res.body
  } catch (error) {
    console.error('Error finding dog', error)
    throw error
  }
}

export async function fetchMultipleDogs(): Promise<dogPictures> {
  const res = await request.get('https://dog.ceo/api/breeds/image/random/12')

  return res.body
}
