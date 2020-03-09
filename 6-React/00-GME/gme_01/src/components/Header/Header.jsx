import React, { Component } from 'react';
import './Header.css';
import Dropdown from '../Dropdown/Dropdown';
import Useritem from '../Users/Useritem';

export class Header extends Component {
  render() {
    return (
      <div className='container'>
        <header className='Header text-center align-center'>
          {/* <h1 className='display-4 my-auto'> First Title</h1> */}
          <Useritem />
          <Dropdown />
        </header>
      </div>
    );
  }
}

export default Header;
