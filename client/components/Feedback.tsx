import { useQuery } from '@tanstack/react-query'
import { fetchComment } from '../APIs/comment.ts'
import { useState } from 'react'

export default function feedbackList() {
  const [text, setText] = useState('')

  return (
    <>
      <h1> How is our website?</h1>
    </>
  )
}
