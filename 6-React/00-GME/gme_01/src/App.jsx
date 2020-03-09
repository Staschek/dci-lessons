import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';

class App extends Component {
  render() {
    return (
      <>
        <Navbar icon='fab fa-github' />
        <div className='row'>
          <Header />
        </div>
        {/* <div className='row'>
          <Cards />
        </div>{' '} */}
      </>
    );
  }
}

export default App;
