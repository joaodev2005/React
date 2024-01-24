import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to='/'>HOME</Link>
        <Link to='/contact'>CONTATOS</Link>
        <Link to='/about'>SOBRE</Link>
    </div>
  )
}

export default Navbar