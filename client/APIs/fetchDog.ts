import request from 'superagent'


export async function fetchDog(): Promise<{ message: string}> {
  const res = await request.get(
    `https://dog.ceo/api/breeds/image/random`,
  )

  return res.body
}