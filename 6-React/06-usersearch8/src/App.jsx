import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import Alert from './components/layout/Alert.jsx';
import axios from 'axios';
import Users from './components/users/Users.jsx';
import Search from './components/users/Search.jsx';

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
    //console.log(res.data);
  };
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  alertHandler = (msg, type) => {
    this.setState({ alert: { msg, type } });
    // setTimeout(() => {
    //   this.setState({ alert: null });
    // }, 3500);
  };
  closeAlert = n => {
    this.setState(n);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Alert alert={this.state.alert} closeEvent={this.closeAlert} />
        <Search
          searchValue={this.searchText}
          clearUsers={this.clearUsers}
          showClear={this.state.users.length > 0 ? true : false}
          setAlert={this.alertHandler}
        />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
