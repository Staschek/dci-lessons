import React, { Component } from 'react';

export class BForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.letBooks} id='book-form'>
        <div>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' className='u-full-width' />
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' className='u-full-width' />
        </div>
        <div>
          <label htmlFor='isbn'>ISBN#</label>
          <input type='text' id='isbn' className='u-full-width' />
        </div>
        <div>
          <input className='u-full-width button' type='submit' value='Submit' />
        </div>
      </form>
    );
  }
}

export default BForm;
