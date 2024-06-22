import Dogs from './Dogs.tsx'
import NavBar from './Navbar.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [currentDog, setCurrentDog] = useState<string>('')

  return (
    <div className="spacing">
      <Header />
      <div>
        <NavBar />
      </div>
      <Outlet context={{ currentDog, setCurrentDog }} />
      <Footer />
    </div>
  )
}

export default App
