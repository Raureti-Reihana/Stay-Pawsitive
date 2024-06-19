import { useEffect, useState } from 'react'
import { fetchDog } from '../APIs/fetchDog.ts'
import * as Models from '../models/fetchDog.ts'

export default function Dogs() {
  const [dogs, setDogs] = useState(null as Models.dogPictures | null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const data = await fetchDog()
        setDogs(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message)
        }
        console.error("API didn't work")
        setError('Something went wrong, come back soon!')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  console.log(dogs)

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      {isLoading || dogs == null ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2> Dogs </h2>
          <img src={dogs.message} alt="dogPicture" />
        </>
      )}
    </>
  )
}
