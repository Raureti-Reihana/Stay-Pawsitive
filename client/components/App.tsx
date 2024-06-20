import Dogs from './Dogs.tsx'
import Comments from './comments.tsx'
import { useState } from 'react'
// import Dogs from '../APIs/fetchDog.ts'

function App() {
  const [currentDog, setCurrentDog] = useState<string>('')
  const [commentsMap, setCommentsMap] = useState<Record<string, string[]>>({})

  return (
    <div>
      <div>Comment something pawsitive about the dog</div>
      <Dogs currentDog={currentDog} setCurrentDog={setCurrentDog} />
      <Comments
        currentDog={currentDog}
        commentsMap={commentsMap}
        setCommentsMap={setCommentsMap}
      />
    </div>
  )
}

export default App
