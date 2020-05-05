import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from './components/elements/Appbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Test from './components/pages/Test';
import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <div className='App'>
        <AppBar />
        <div className='App-header p-4'>
          {' '}
          <Switch>
            <Route exact path='/' render={(props) => <Home />} />
            <Route path='/about' render={(props) => <About />} />
            <Route path='/test' render={(props) => <Test />} />
            {/* <Route path='/login' render={(props) => <Login />} /> */}
            <Route path='/register' render={(props) => <Register />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
