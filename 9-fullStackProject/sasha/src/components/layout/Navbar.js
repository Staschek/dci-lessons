import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className=' d-flex flex-row bd-highlight mb-3 navbar navbar-light bg-dark'>
        <ul className='navbar-nav d-flex'>
          <li className='nav-item active'>
            <Link to='/' className='text-white'>
              {' '}
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='text-white'>
              {' '}
              About
            </Link>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link to='/login' className='text-white'>
              {' '}
              Login
            </Link>
          </li>
          <li className='nav-item active'>
            <Link to='/register' className='text-white'>
              {' '}
              create a developer account
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
