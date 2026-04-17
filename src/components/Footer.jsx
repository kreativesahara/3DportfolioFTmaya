import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='footer-grid'>
        <div className='footer-col'>
          <div className='footer-brand'>Kreativ Saharaa</div>
          <p style={{ marginTop: '0.75rem', fontSize: '0.875rem' }}>
            Bringing imagination to life through 3D, animation, and interactive experiences.
          </p>
        </div>
        <div className='footer-col'>
          <h4>Navigate</h4>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/playground'>Playground</Link></li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li> 
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>Copyright &copy; 2024 Kreativ Saharaa. All rights reserved.</div>
    </footer>
  )
}

export default Footer