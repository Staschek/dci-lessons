import React, { Component } from 'react';
import './Cards.css';

export class Cards extends Component {
  render() {
    return (
      <div className='container'>
        <div class='card col-4'>
          <img
            className='card-img-top'
            src='https://66.media.tumblr.com/tumblr_l7dcmsQuPY1qzprlbo1_500.jpg'
            alt='Card image cap'
          />
          <div className='card-body'>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className='card col-4'>
          <img
            className='card-img-top'
            src='https://i.pinimg.com/originals/d3/b7/93/d3b7934c6d9c88054d0764269bae8f18.jpg'
            alt='Card image cap'
          />
          <div className='card-body'>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className='card col-4'>
          <img
            className='card-img-top'
            src='https://i.pinimg.com/originals/d8/56/ca/d856caaa7ece9338300b561353b5b193.jpg'
            alt='Card image cap'
          />
          <div className='card-body'>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
