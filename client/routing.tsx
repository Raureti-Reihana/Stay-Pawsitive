// routing.tsx
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom'
import React, { useState } from 'react'
import App from './components/App'
import Comments from './components/comments'
import Dogs from './components/Dogs'
import Feedback from './components/Feedback'
import Instructions from './components/Instructions'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from './components/Home'

const DogsWrapper: React.FC = () => {
  const [currentDog, setCurrentDog] = useState<string>('')

  return <Dogs currentDog={currentDog} setCurrentDog={setCurrentDog} />
}

const CommentsWrapper: React.FC = () => {
  const [currentDog] = useState<string>('')
  const [commentsMap, setCommentsMap] = useState<Record<string, string[]>>({})

  return (
    <Comments
      currentDog={currentDog}
      commentsMap={commentsMap}
      setCommentsMap={setCommentsMap}
    />
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="instructions" element={<Instructions />} />
      <Route path="dogs" element={<DogsWrapper />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="index" element={<Navigate to="/" replace />} />
    </Route>,
  ),
)

export default router
