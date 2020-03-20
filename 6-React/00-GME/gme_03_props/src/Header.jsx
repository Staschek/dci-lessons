import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='navbar nav'>
        {' '}
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
