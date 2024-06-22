import { useQuery } from '@tanstack/react-query'
import { fetchDog } from '../APIs/fetchDog.ts'
import { useState, useEffect } from 'react'
import { DogsProps } from '../models/fetchDog.ts'
import Comments from './comments.tsx'
import { useOutletContext } from 'react-router-dom'

export default function Dogs() {
  const { currentDog, setCurrentDog } = useOutletContext<{
    currentDog: string
    setCurrentDog: (dog: string) => void
  }>()
  const [commentsMap, setCommentsMap] = useState<Record<string, string[]>>({})

  const {
    data: doggies,
    isPending,
    error,
  } = useQuery({
    queryKey: ['dogs'],
    queryFn: fetchDog,
  })

  const [dogIndex, setDogIndex] = useState(0)

  useEffect(() => {
    if (doggies && doggies.message) {
      setCurrentDog(doggies.message[0]) // Set the initial dog
    }
  }, [doggies, setCurrentDog])

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong!</div>
  }

  const dogs = doggies.message

  const handleNext = () => {
    const newIndex = (dogIndex + 1) % dogs.length
    setDogIndex(newIndex)
    setCurrentDog(dogs[newIndex])
  }

  const handlePrevious = () => {
    const newIndex = (dogIndex - 1 + dogs.length) % dogs.length
    setDogIndex(newIndex)
    setCurrentDog(dogs[newIndex])
  }

  return (
    <>
      <h2> Dogs </h2>
      <img src={doggies.message[dogIndex]} alt="dogPicture" />
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>Comment something pawsitive about the dog</div>
      <Comments
        currentDog={currentDog}
        commentsMap={commentsMap}
        setCommentsMap={setCommentsMap}
      />
    </>
  )
}
