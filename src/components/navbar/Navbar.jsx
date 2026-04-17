import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className="fixed top-0 left-0 w-full z-[1000] border-b border-border-color bg-bg-primary/80 backdrop-blur-xl h-24">
      <nav className="max-w-[1280px] h-full mx-auto px-lg flex items-center justify-between">
        <Link to='/' className="relative z-50 text-[clamp(1.25rem,4vw,1.75rem)] font-extrabold bg-gradient-brand bg-clip-text text-transparent opacity-100 visible hover:brightness-110 transition-all duration-base" id='navbar-brand'>
          Kreativ Saharaa
        </Link>

        {/* Hamburger — visible on mobile only (md:hidden) */}
        <button
          className="relative z-[1100] w-11 h-11 flex flex-col justify-center items-center gap-[6px] p-2 hover:bg-surface-glass rounded-md md:hidden transition-all duration-base"
          onClick={toggleMenu}
          aria-label='Toggle navigation menu'
          aria-expanded={isOpen}
          id='navbar-hamburger'
        >
          <span className={`w-8 h-[2px] bg-text-primary rounded-full transition-all duration-base ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`w-8 h-[2px] bg-text-primary rounded-full transition-all duration-base ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-8 h-[2px] bg-text-primary rounded-full transition-all duration-base ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>

        {/* Navigation Links */}
        <ul className={`
          flex flex-col md:flex-row items-center gap-0 md:gap-xl list-none p-0 m-0
          fixed md:relative top-24 md:top-0 left-0 w-full md:w-auto
          bg-[rgba(10,10,15,0.95)] md:bg-transparent backdrop-blur-3xl md:backdrop-blur-none
          transition-all duration-slow ease-smooth border-b border-border-color md:border-b-0
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-[120%] md:translate-y-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'}
          py-xl md:py-0
        `} id='navbar-links'>
          <li className="w-full md:w-auto text-center py-md md:py-0 border-b border-white/[0.03] md:border-0">
            <Link to='/home' id='nav-link-home' className="text-text-primary text-xl md:text-base font-medium transition-all duration-base hover:text-accent-primary">Home</Link>
          </li>
          <li className="w-full md:w-auto text-center py-md md:py-0 border-b border-white/[0.03] md:border-0">
            <Link to='/playground' id='nav-link-playground' className="text-text-primary text-xl md:text-base font-medium transition-all duration-base hover:text-accent-primary">Playground</Link>
          </li>
          <li className="w-full md:w-auto text-center py-md md:py-0 border-b border-white/[0.03] md:border-0">
            <Link to='/about' id='nav-link-about' className="text-text-primary text-xl md:text-base font-medium transition-all duration-base hover:text-accent-primary">About</Link>
          </li>
          <li className="w-full md:w-auto text-center py-md md:py-0">
            <Link to='/contact' id='nav-link-contact' className="text-text-primary text-xl md:text-base font-medium transition-all duration-base hover:text-accent-primary">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;