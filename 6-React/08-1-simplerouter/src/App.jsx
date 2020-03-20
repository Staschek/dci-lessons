import React, { Component } from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
import Formin from './components/formin/Formin';
import Formout from './components/formout/Formout';

//BrowserRouter is the router implementation for HTML5 browser
//Link is your replacement for anchor tags
//Router is the conditionally shown component based on matching a path to a URL
//Switch returns only the first matching route rather than all matching routesl.

import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

//We will give each Route either a target 'Component' or we can send a function 'render'

class App extends Component {
  state = {};
  fillForm = email => {
    this.setState(email);
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(e.target.email.name, e.target.password.value);
    this.setState({
      [e.target.email.name]: e.target.email.value,
      [e.target.password.name]: e.target.password.value
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className='body'>
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <>
                  <h1>Home</h1>
                  <Formout
                    messageFormout1={this.state.email}
                    messageFormout2={this.state.password}
                  />
                </>
              )}
            />
            <Route
              path='/form'
              render={props => (
                <Formin
                  submitHandler={this.submitHandler}
                  messageFormin={this.fillForm}
                />
              )}
            />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
