import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import Users from './components/users/Users';
import Search from './components/users/Search.jsx';
import Formin from './components/formin/Formin';
import Formout from './components/formout/Formout';

//having one sate for our all react application
class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   console.log(this.state.loading);
  //   const APIKey = process.env.REACT_APP_CLIENT_ID;
  //   const APISecret = process.env.REACT_APP_CLIENT_SECRET;
  //   let res;
  //   // console.log(
  //   //   `https://api.github.com/users?client_id=${APIKey}&client_secret=${APISecret}`
  //   // );
  //   //console.log(process.env);

  //   res = await axios.get(
  //     `https://api.github.com/users?client_id=${APIKey}&client_secret=${APISecret}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }
  searchCleared = () => {
    this.setState({ users: [] });
  };
  searchText = async text => {
    this.setState({ loading: true });
    console.log(this.state.loading);
    const APIKey = process.env.REACT_APP_CLIENT_ID;
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;
    let res;
    console.log(
      text,
      `https://api.github.com/users?client_id=${APIKey}&client_secret=${APISecret}`
    );
    //console.log(process.env);
    res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${APIKey}&client_secret=${APISecret}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  // componentDidUpdate() {
  //   console.log(this.state.password);
  //   console.log(this.state.email);
  // }
  fillForm = email => {
    this.setState(email);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Formin messageFormin={this.fillForm} />
        <Formout
          messageFormout1={this.state.email}
          messageFormout2={this.state.password}
        />
        <Search
          searchValue={this.searchText}
          searchClear={this.searchCleared}
          clearApear={this.state.users.length > 0}
        />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
