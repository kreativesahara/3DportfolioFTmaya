import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <div className='navbar'>
      <nav className='navbar-inner'>
        <Link to='/' className='navbar-brand' id='navbar-brand'>
          Kreativ Saharaa
        </Link>

        {/* Hamburger — visible on mobile only */}
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label='Toggle navigation menu'
          aria-expanded={isOpen}
          id='navbar-hamburger'
        >
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
          <span className='hamburger-line'></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id='navbar-links'>
          <li>
            <Link to='/home' id='nav-link-home'>Home</Link>
          </li>
          <li>
            <Link to='/playground' id='nav-link-playground'>Playground</Link>
          </li>
          <li>
            <Link to='/about' id='nav-link-about'>About</Link>
          </li>
          <li>
            <Link to='/contact' id='nav-link-contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar