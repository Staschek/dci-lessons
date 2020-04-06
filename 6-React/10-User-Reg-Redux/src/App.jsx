import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Fragment, Component } from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users/Users.jsx';
import Search from './components/users/Search.jsx';
import { Alert, Navbar } from './components/layout/';
import Home from './components/Home';
import UserForm from './components/regform/UserForm.jsx';

import { Provider } from 'react-redux';
import store from './store';

//having one state for our all react application
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  searchText = async text => {
    this.setState({ loading: true });
    const APIKey = process.env.REACT_APP_CLIENT_ID;
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;
    // console.log(APIKey);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${APIKey}&client_secret=${APISecret}`
    );
    this.setState({ users: res.data.items, loading: false });
    console.log(res.data);
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />
            <br />
            <br />
            <br />
            <br />

            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => <Home />} />
              <Route
                path='/search'
                render={props => (
                  <Fragment>
                    <Search
                      searchValue={this.searchText}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </Fragment>
                )}
              />
              <Route path='/regform' render={props => <UserForm />} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
