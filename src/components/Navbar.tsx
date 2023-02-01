import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar is-primary padding-nav" role="navigation" aria-label="main navigation">
    
        <h1 className='title title-strong-weight is-1 is-centered'> Moving Inventory</h1>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
                <NavLink to="/" className="navbar-item">
                    Add a Box
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar


