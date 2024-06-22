import request from 'superagent'
import { CommentData } from '../models/comment'

//Create
export async function addComment(
  newComment: CommentData,
): Promise<Comment> {
  const res = await request
    .post('https://jsonplaceholder.typicode.com/comments')
    .send(newComment)
  return res.body
}

//Read
export async function fetchComment(): Promise<Comment[]> {
  const rest = await request.get(
    'https://jsonplaceholder.typicode.com/comments',
  )
  return rest.body
}

// Update

export async function updateComment(
  updatedComment: Comment,
): Promise<Comment> {
  const res = await request
    .patch('https://jsonplaceholder.typicode.com/comments')
    .send(updatedComment)
  return res.body
}
