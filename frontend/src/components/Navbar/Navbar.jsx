import React from 'react';
import './Navbar.css';  // Assume you have a CSS file for styling
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/6909874.webp'

const Navbar = () => {
  return (
    <nav className="navbar" id='navbar'>
      <div className="navbar__container">
        {/* Logo Section */}
        <div className="navbar__logo">
          <Link to="/"><span><img src={logo} alt="Galactia Logo" /> Galactia</span></Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar__menu">
          <li>
            <a href='http://172.19.27.251:5173/' activeClassName="active" className="navbar__link">Programs</a>
          </li>
          <li>
            <a href='#footer' activeClassName="active" className="navbar__link">About Us</a>
          </li>
          <li>
            <a href='#update' activeClassName="active" className="navbar__link">Update</a>
          </li>
          <li>
            <a href='#footer' activeClassName="active" className="navbar__link">Contact</a>
          </li>
        </ul>

        {/* Get Started Button */}
        <div className="navbar__button">
          <Link onClick={()=>window.location.href='http://172.19.27.251:5173/'} className="get-started-btn">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
