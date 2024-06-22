import Dogs from './Dogs.tsx'
import NavBar from './Navbar.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Comments from './comments.tsx'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [currentDog, setCurrentDog] = useState<string>('')
  const [commentsMap, setCommentsMap] = useState<Record<string, string[]>>({})

  return (
    <div>
      <Header />
      <div>
        <NavBar />
      </div>
      <Outlet />
      <div>Comment something pawsitive about the dog</div>
      <Comments
        currentDog={currentDog}
        commentsMap={commentsMap}
        setCommentsMap={setCommentsMap}
      />
      <Footer />
    </div>
  )
}

export default App
