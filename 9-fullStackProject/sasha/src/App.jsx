import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './components/layout/Home';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import About from './components/layout/About.js';
import Register from './components/non-layout/Register.js';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    skills: '',
    gitHubUser: '',
    bio: '',
    email: '',
    company: '',
    website: '',
    location: '',
    youtube: '',
    password: '',
    phone: '',
    referto: false,
  };
  setRedirect = (e) => {
    e.preventDefault();
    this.setState({
      referto: true,
    });

    setTimeout(() => {
      this.setState({
        referto: false,
      });
    }, 1000);
  };
  renderRedirect = () => {
    if (this.state.referto) {
      return <Redirect to='/' />;
    }
  };
  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Router>
          {this.renderRedirect()}
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          <Switch>
            <Route path='/about' component={About} />
          </Switch>
          <Switch>
            <Route
              path='/register'
              render={() => (
                <Register
                  handleChange={this.handleChange}
                  setRedirect={this.setRedirect}
                />
              )}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
