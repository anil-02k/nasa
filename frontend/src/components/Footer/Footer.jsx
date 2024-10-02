import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/6909874.webp'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
        <div className="navbar__logo">
          <a href='#navbar'><span><img src={logo} alt="Galactia Logo" /> Spacez</span></a>
        </div>
            <p>spacez provides essential  for overall health and well- provides essential nutrients for overall healt provides essential nutrients for.</p>
            <div className='footer-social-icons'>
                <img src={facebook_icon}/>
                <img src={twitter_icon}/>
                <img src={linkedin_icon}/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-232-323-3323</li>
                <li>spacez@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr></hr>
      <p className='footer-copyright'>Copyright 2024 © spacez.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer