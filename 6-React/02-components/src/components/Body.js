import React, { Component } from 'react';
import Leftside from './Leftside';
import Article from './Article';
import Rightside from './Rightside';

export class Body extends Component {
  render() {
    return (
      <div className='Body'>
        <Leftside />
        <Article />
        <Rightside />
      </div>
    );
  }
}

export default Body;
