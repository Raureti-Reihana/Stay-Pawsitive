import { useQuery } from '@tanstack/react-query'
import { fetchComment } from '../APIs/comment.ts'
import { useState } from 'react'

export default function Feedback() {
  const [text, setText] = useState('')

  return (
    <>
      <h2> How is our website?</h2>
    </>
  )
}
