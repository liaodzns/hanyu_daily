import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav className="navbar">
        <div className="navbar-left"> 
            
        </div>

        <div className="navbar-right">
            <ul className="nav-links">
                <li>
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;