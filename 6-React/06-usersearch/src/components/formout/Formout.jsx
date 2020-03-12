import React, { Component } from 'react';

export class Formout extends Component {
  static defaultProps = {
    messageFormout1: '...',
    messageFormout2: '...'
  };
  render() {
    return (
      <>
        <div>Email: {this.props.messageFormout1}</div>
        <div>Password: {this.props.messageFormout2}</div>
      </>
    );
  }
}

export default Formout;
