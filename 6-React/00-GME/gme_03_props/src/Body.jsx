import React, { Component } from 'react';

export class Body extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          name='title'
          onChange={this.props.changeHandler}
          placeholder='My Header'
        />
        <br />
        <input
          className='mt-2'
          name='footer'
          type='text'
          onChange={this.props.changeHandler}
          placeholder='My Footer'
        />
      </div>
    );
  }
}

export default Body;
