import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    background: 'black',
  },
};
export default function AppBar() {
  return (
    <div className={styles}>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <Link to='/' className='navbar-brand'>
            {' '}
            devBoardDashHub
          </Link>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <Link to='/' className='nav-link'>
                {' '}
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                {' '}
                About
              </Link>
            </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                {' '}
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-link'>
                {' '}
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
