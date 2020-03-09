import React, { Component } from 'react';
import propTypes from 'prop-types'; //kürzel Proptypes
import './Navbar.css';

class Navbar extends Component {
  //defining a default props
  static defaultProps = {
    title: 'gme_01',
    icon: 'fab fa-bath'
  };

  //defining a default props
  static propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar'>
        <div className='container'>
          <h1>
            <i className={this.props.icon}></i> {this.props.title}
          </h1>
        </div>
      </nav>
    );
  }
}

export default Navbar;
