import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchComment, addComment } from '../APIs/comment.ts'
import { useState } from 'react'
import { CommentData } from '../models/comment.ts'

export default function Feedback() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const {
    data: comments,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['comments'],
    queryFn: () => fetchComment(),
  })

  const queryClient = useQueryClient()

  const addCommentMutation = useMutation({
    mutationFn: addComment,
    onSuccess: (data) => {
      const currentComments = queryClient.getQueryData([
        'comments',
      ]) as CommentData[]
      queryClient.setQueryData(['comments'], [data, ...currentComments])
    },
  })

  if (isError) {
    return <div>An error occured</div>
  }

  if (isPending) {
    return <div>Loading...</div>
  }

  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const CommentData = {
      postId: 1,
      id: Math.floor(Math.random() * 1000000),
      name: 'Anonymous',
      body: text,
      email: email,
    }
    addCommentMutation.mutate(CommentData)
    setText('')
    setEmail('')
  }

  return (
    <>
      <h2 className="feedback-tile">How is our website?</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label htmlFor="email">{'Email: '}</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChangeEmail}
          required
        />
        <label htmlFor="comment">{'Leave us your feedback: '}</label>
        <textarea
          name="comment"
          id="comment"
          value={text}
          onChange={handleChangeText}
          className="comment-box"
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2 className="past-feedback">Past Feedback:</h2>
      <ul className="feedback-ul">
        {comments.map((p) => (
          <li key={p.id} className="feedback-li">
            <em>{p.body}</em> <br /> <strong>{p.email}</strong>
          </li>
        ))}
      </ul>
    </>
  )
}
