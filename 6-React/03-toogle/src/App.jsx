import React, { Fragment, Component } from 'react';
import './App.css';
import Light from './Light';
import lifcycleBulb from './lifcycleBulb';

/* 
Fragment are used as a surrounding div (anom)

state in js ->   
    constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  but in react its like below

stateful Component are Classes, stateless Component are Functions!
**/
class App extends Component {
  state = { isToggleOn: false };
  //need to be an arrowfunction to work!
  changeToggle = () => {
    this.setState(function(prevState) {
      return {
        isToggleOn: !prevState.isToggleOn
      };
    });
  };
  render() {
    return (
      <>
        {/* this refers to the class. its mandetory! dunno why   */}
        <Light isToggle={this.state.isToggleOn} />
        {/* <div className='border'></div> */}
        <br />
        <br />
        <br />
        <button onClick={this.changeToggle}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>

        <lifcycleBulb />
      </>
    );
  }
}

export default App;
