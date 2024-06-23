import React from 'react'
import { fetchMultipleDogs } from '../APIs/fetchDog'
import { useQuery } from '@tanstack/react-query'

function Home() {
  const {
    data: multipleDogs,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['multipleDogs'],
    queryFn: () => fetchMultipleDogs(),
  })

  if (isError) {
    return <div>An error occured</div>
  }

  if (isPending) {
    return <div>Loading...</div>
  }


  return (
    <div>
      <h2 className="home-title">Welcome to Stay Pawsitive!</h2>
      <p className="home-paragraph">
        Having a RUFF day?...we can lift your mood up with these cute doggo pics
        you can comment on!
        <br />
        Remember anything is PAW-sible when you have a dog! We hope you have a
        PAW-fect day!
      </p>
      <div className="multiple-dogs-container">
        {multipleDogs.message.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Dog ${index}`}
            className="multiple-dogs-img"
          />
        ))}
    </div>
  </div>
  )
}

export default Home
