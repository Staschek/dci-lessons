import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar navbar-dark '>
      <Link className='nav-item nav-link' to='/'>
        {' '}
        Main{' '}
      </Link>
      <Link className='nav-item nav-link' to='/about'>
        {' '}
        about{' '}
      </Link>
      <Link className='nav-item nav-link' to='/form'>
        {' '}
        form{' '}
      </Link>
      <Link className='nav-item nav-link' to='/contact'>
        {' '}
        contact{' '}
      </Link>
    </div>
  );
}
