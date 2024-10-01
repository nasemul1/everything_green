import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <>
        <nav>
            <img src={ logo } alt="logo" id='logo'/>
            <div className="links">
                <a href="/">Sustainable Websites</a>
                <a href="/">Blog</a>
                <a href="/">Contact Us</a>
                <a href="/">Login</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar