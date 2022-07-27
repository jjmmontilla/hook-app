import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link to="/"  className='navbar-brand'> useContext </Link>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-item'>
                            <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                                Home
                            </NavLink>
                        </li>
                        
                        <li className='nav-item'>
                            <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                                About
                            </NavLink>
                        </li>
                        
                        <li className='nav-item'>
                            <NavLink to="/login" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
