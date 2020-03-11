import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import Users from './components/users/Users';
import Spinner from './components/spinner/Spinner';

//having one sate for our all react application
class App extends Component {
  state = {
    users: [],
    loading: true
  };

  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
