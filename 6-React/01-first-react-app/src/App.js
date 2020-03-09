import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  sayName = () => 'MyName';

  render() {
    const name = `EMIN\u018EM`;
    const loading = false;
    const showName = true;
    console.log(React);
    console.log(App);

    // if (loading) {
    //   return (
    //     <div className='App'>
    //       <header className='App-header'>
    //         <img src={logo} className='App-logo' alt='logo' />
    //         {/* <h1>Hi my is {name} ...</h1> */}
    //         <h1>loading ...</h1>
    //       </header>{' '}
    //     </div>
    //   );
    // } else {

    return (
      <>
        <Navbar
          // title='Ultimate N-Bar'  // ---> jumps to the default Value in Navbar.js spec.
          icon='fab fa-github'
          // style={{marginRight: 2em}}
        />
        <Navbar
          title='second' // ---> jumps to the default Value in Navbar.js spec.
          icon='fab fa-github'
          // style={{marginRight: 2em}}
        />
        <Navbar
          title='Ultimate N-Bar' // ---> jumps to the default Value in Navbar.js spec.
          icon='fab fa-github'
          styler='something'
        />
        <header className='App-header'>
          <div className='App-body'>
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            {/* <h1>Hi my is {name} ...</h1> */}
            {loading ? (
              <h4>loading ... </h4>
            ) : (
              <h1>Hello {showName && name}</h1>
            )}
          </div>
          <footer>
            <button>Press</button>
          </footer>
        </header>
      </>
    );
    // }
  }
}

export default App;
