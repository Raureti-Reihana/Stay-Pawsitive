import { useQuery } from '@tanstack/react-query'
import { fetchDog } from '../APIs/fetchDog.ts'


export default function Dogs() {
  const { 
    data: dogs,
    isPending,
    error 
  } = useQuery({
    queryKey: ['dogs'],
    queryFn: fetchDog,
  })
  
  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong!</div>
  }

  return (
    <>
      <h2> Dogs </h2>
      <img src={dogs.message} alt="dogPicture" />
    </>
  )
}