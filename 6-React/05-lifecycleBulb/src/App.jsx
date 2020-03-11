import React, { Component } from 'react';
import './App.css';
import Light from './Light';

class App extends Component {
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

  componentWillUnmount() {
    const div = document.querySelector('.h-50');
    console.log(div);
    div.style.height = '200px';
  }

  render() {
    return (
      <div className='container'>
        <div className='h-50 d-block'>
          {' '}
          {this.state.showB ? <Light isToggle={this.state.isToggleOn} /> : null}
        </div>

        <button className='btn' onClick={this.changeToggle}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}{' '}
        </button>
        <button className='btn' onClick={() => this.showHandler()}>
          {this.state.showB ? 'SHOW' : 'HIDE'}{' '}
        </button>
      </div>
    );
  }
}

export default App;
