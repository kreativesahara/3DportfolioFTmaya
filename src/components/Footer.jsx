import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-secondary text-text-secondary border-t border-border-color mt-3xl">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] md:text-left gap-xl p-2xl px-lg max-w-[1280px] mx-auto text-center">
        <div className="flex flex-col gap-sm items-center md:items-start">
          <div className="text-[clamp(1.25rem,3vw,1.75rem)] font-extrabold bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            //// Kreativ_ Saharaa
          </div>
          <p className="mt-3 text-[0.875rem] max-w-sm text-center md:text-left">
            Bringing imagination to life through 3D, animation, and interactive experiences.
          </p>
        </div>
        
        <div className="flex flex-col gap-sm">
          <h4 className="text-text-primary text-[0.875rem] font-semibold uppercase tracking-[0.1em] mb-md">Navigate</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-sm">
            <li className="text-text-secondary text-[0.938rem] cursor-pointer transition-colors duration-fast ease-smooth hover:text-accent-secondary">
              <Link to='/home' className="hover:text-accent-secondary">Home</Link>
            </li>
            <li className="text-text-secondary text-[0.938rem] cursor-pointer transition-colors duration-fast ease-smooth hover:text-accent-secondary">
              <Link to='/about' className="hover:text-accent-secondary">About</Link>
            </li>
            <li className="text-text-secondary text-[0.938rem] cursor-pointer transition-colors duration-fast ease-smooth hover:text-accent-secondary">
              <Link to='/contact' className="hover:text-accent-secondary">Contact</Link>
            </li>
            <li className="text-text-secondary text-[0.938rem] cursor-pointer transition-colors duration-fast ease-smooth hover:text-accent-secondary">
              <Link to='/playground' className="hover:text-accent-secondary">Playground</Link>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-sm">
          <h4 className="text-text-primary text-[0.875rem] font-semibold uppercase tracking-[0.1em] mb-md">Legal</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-sm">
            <li className="text-text-secondary text-[0.938rem] cursor-pointer transition-colors duration-fast ease-smooth hover:text-accent-secondary">Terms</li>
            <li className="text-text-secondary text-[0.938rem] cursor-pointer transition-colors duration-fast ease-smooth hover:text-accent-secondary">Privacy</li> 
            <li className="text-text-secondary text-[0.938rem] cursor-pointer transition-colors duration-fast ease-smooth hover:text-accent-secondary">Cookies</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center p-lg border-t border-border-color text-[0.813rem] text-text-secondary font-bold">
        Copyright &copy; 2024 Kreativ Saharaa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;