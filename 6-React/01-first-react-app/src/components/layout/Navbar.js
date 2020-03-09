import React, { Component } from 'react';

class Navbar extends Component {
  static defaultProps = {
    title: 'User Research',
    icon: 'fab fa-github'
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} style={this.props.style}></i>{' '}
          {this.props.title}
        </h1>
        <p>{this.props.styler} </p>
      </nav>
    );
  }
}

export default Navbar;
