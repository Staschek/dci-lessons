import React, { Component } from 'react';

export class Dropdown extends Component {
  render() {
    return (
      <div className='dropdown'>
        <button
          className='btn btn-light dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Dropdown button
        </button>
        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          <a className='dropdown-item' href='#'>
            Action
          </a>
          <a className='dropdown-item' href='#'>
            Another action
          </a>
          <a className='dropdown-item' href='#'>
            Something else here
          </a>
        </div>
      </div>
    );
  }
}

export default Dropdown;
