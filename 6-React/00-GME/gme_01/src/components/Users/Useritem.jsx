import React, { Component } from 'react';
import './User.css';
export class Useritem extends Component {
  //   constructor() {     //First way of defining a state
  //     super();    //Construct the Father before construct my own state
  //     this.state = {
  //       x: 'me'
  //     };

  state = {
    id: 1,
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo'
  };

  render() {
    return (
      <div className='card'>
        <a target='_blank' href={this.state.html_url}>
          <img
            src={this.state.avatar_url}
            className='round-img'
            style={{ width: '16em' }}
          />
          <h3>{this.state.login}</h3>
        </a>
      </div>
    );
  }
}

export default Useritem;
