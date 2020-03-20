import React, { Component } from 'react';

class Article extends Component {
  addInput() {
    //.addEventListener('keyup', e => {
    //      let inputV = e.target.value;
    //    });
  }
  render() {
    return (
      <div className='Article'>
        <input type='text' id='inpt' placeholder='Enter title' />
        <h2 id='title'> </h2>
        <p>
          This is an example of class components using only normal JS ES6
          modules
        </p>
        <p>We will test the module export and import capabilities</p>
      </div>
    );
  }
}

export default Article;
