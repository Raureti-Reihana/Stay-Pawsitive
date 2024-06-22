import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Dogs">Check out the dogs</Link>
        </li>
        <li>
          <Link to="/comments">Leave your feedback</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar