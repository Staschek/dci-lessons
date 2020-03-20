//rce tab
import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  //state Object
  state = {
    backgroundColor: ''
  };
  // passing an Object
  ChangeColor(e) {
    this.setState({
      backgroundColor: '#' + e.target.value
    });
  }
  render() {
    // predefined name
    return (
      <div className='Article'>
        <input
          type='text'
          id='inpt'
          className='inputTitle'
          placeholder='Enter color (RGB-Number)'
          onChange={e => {
            this.ChangeColor(e);
          }}
        />{' '}
        <div className='title' style={this.state}>
          <h2 id='title'> </h2>{' '}
        </div>
        <p>
          ... this is an example of how to change the Background-color through
          input Value{' '}
        </p>{' '}
      </div>
    );
  }
}

export default Article;
