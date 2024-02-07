import { Link, NavLink } from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
      {/* <Link to='/'>HOME</Link>
      <Link to='/contact'>CONTATOS</Link>
      <Link to='/about'>SOBRE</Link> */}
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : "")}>HOME</NavLink>
      <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : "")}>CONTATOS</NavLink>
      <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : "")}>SOBRE</NavLink>
    </div>
  )
}

export default Navbar