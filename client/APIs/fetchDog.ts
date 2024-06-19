import request from 'superagent'

export async function fetchDog() {
  const res = await request.get(`https://dog.ceo/api/breeds/image/random/3`)

  return res.body
}
