import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Navbar">
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : "")}>HOME</NavLink>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : "")}>CONTATOS</NavLink>
        </div>
    )
}

export default Navbar