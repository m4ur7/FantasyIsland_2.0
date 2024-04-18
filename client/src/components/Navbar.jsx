import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets/images';

const Navbar = ({ textColor }) => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className={`flex text-lg gap-7 font-medium ${textColor ? `text-${textColor}` : 'text-gray'}`}>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-700' : 'text-gray'}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-700' : 'text-gray'}>
          Projects
        </NavLink>
        <NavLink to='/island' className={({ isActive }) => isActive ? 'text-blue-700' : 'text-gray'}>
          Island
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
