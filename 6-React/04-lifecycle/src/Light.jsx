import React, { Component } from 'react';
import lightOff from './pic_bulboff.gif';
import lightOn from './pic_bulbon.gif';

function Light(props) {
  return <img src={props.isToggle ? lightOn : lightOff}></img>;
}

export default Light;
