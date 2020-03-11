import React, { Component } from 'react';
import Light from './Light';

export class lifcycleBulb extends Component {
  state = {
    showB: true,
    isToggleOn: true
  };

  changeToggle = () => {
    this.setState(function(prevState) {
      return {
        isToggleOn: !prevState.isToggleOn
      };
    });
  };

  showHandler() {
    this.setState(x => ({ showB: !x.showB }));
  }
  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className='row'>
        <Light isToggle={this.state.isToggleOn} />
        <button className='btn' onClick={this.changeToggle}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}{' '}
        </button>
        <button className='btn' onClick={() => this.showHandler()}>
          {this.state.isToggleOn ? 'SHOW' : 'HIDE'}{' '}
        </button>
      </div>
    );
  }
}

export default lifcycleBulb;
