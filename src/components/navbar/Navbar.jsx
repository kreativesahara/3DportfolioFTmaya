import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return ( 
    <div className='navbar shadow-md w-full fixed top-0 left-0'>
      <nav className='md:flex md:justify-between md:items-center bg-white text-indigo-600 hover:text-red-600 py-4 md:px-10 px-6 text-2xl font-bold'>
        <span>Kreativ Saharaa /////</span>
        <ul className='md:flex md:items-center md:pb-0 pb-12 space-x-4'>
            <li>
                <Link to='/home'>///// Home</Link>
            </li>
          <li >
            <Link to='/playground'>Playground</Link>
          </li>
            <li >
               <Link to='/about'>About</Link> 
            </li>
            <li >
             <Link to='/contact'>Contact </Link>
            </li>
        </ul>
     </nav>
    </div>
  )
}

export default Navbar