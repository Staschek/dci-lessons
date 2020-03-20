import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Alert extends Component() {
  state = {
    alert: this.props.alert
  };

  render() {
    return (
      this.state.alert !== null && (
        <div className={`alert alert-${this.state.alert.type}`}>
          <i className={'fas fa-info-circle'} /> {this.state.alert.msg}
          <div className='close left'>x</div>
        </div>
      )
    );
  }
}

Alert.propTypes = {
  alert: PropTypes.object.isRequired
};
export default Alert;
