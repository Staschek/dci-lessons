import React, { Component } from 'react';
import './App.css';
import TitleHeader from './TitleHeader';
import lifcycleBulb from './lifcycleBulb';

class App extends Component {
  state = {
    value: 'default item',
    show: true,
    data: [
      { id: 1, title: 'first item' },
      { id: 2, title: 'second item' },
      { id: 3, title: 'third item' }
    ]
  };

  changeTitle(title) {
    this.setState({ value: title });
  }

  //when you need a current State make a Function, else use object with the new state
  showHandler() {
    this.setState(x => ({ show: !x.show }));
  }

  render() {
    const list = this.state.data.map(item => {
      return (
        <li
          key={item.id}
          onClick={() => {
            this.changeTitle(item.title);
          }}
        >
          {item.title}
        </li>
      );
    });
    return (
      <div className='wrapper'>
        {this.state.show ? <TitleHeader newTitle={this.state.value} /> : null}
        <ul className='list'>{list}</ul>
        <button className='btn' onClick={() => this.showHandler()}>
          Show & Hide
        </button>
        {/* new way is with only this.showHandler and arrowfunction */}
        <lifcycleBulb />
      </div>
    );
  }
}

export default App;
