import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://github.com/staschek'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={logo} className='App-logo' alt='logo' />
          <h4 className='display-4'>Happy Hacking!</h4>{' '}
        </a>
      </header>
    </div>
  );
}

export default App;
