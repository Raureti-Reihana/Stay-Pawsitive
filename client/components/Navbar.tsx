import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul className='nav-ul'>
        <li>
          <Link to="/instructions">Instructions</Link>
        </li>
        <li>
          <Link to="/Dogs">Check out the dogs</Link>
        </li>
        <li>
          <Link to="/feedback">Leave your feedback</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
