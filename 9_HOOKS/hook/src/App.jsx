import { Outlet, Link } from 'react-router-dom'

import './App.css'

function App() {
 

  return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
      <Outlet />
    </>
  )
}

export default App
