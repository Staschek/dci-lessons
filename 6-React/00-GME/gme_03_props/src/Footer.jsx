import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <header className='navbar nav'>
        {' '}
        <h1>{this.props.footer}</h1>
      </header>
    );
  }
}

export default Footer;
