import React from 'react';
import './Navbar.css';  // Assume you have a CSS file for styling
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/6909874.webp'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo Section */}
        <div className="navbar__logo">
          <Link to="/"><span><img src={logo} alt="Galactia Logo" /> Galactia</span></Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar__menu">
          <li>
            <NavLink to="/programs" activeClassName="active" className="navbar__link">Programs</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" className="navbar__link">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/pricing" activeClassName="active" className="navbar__link">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" className="navbar__link">Contact</NavLink>
          </li>
        </ul>

        {/* Get Started Button */}
        <div className="navbar__button">
          <Link to="/get-started" className="get-started-btn">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
