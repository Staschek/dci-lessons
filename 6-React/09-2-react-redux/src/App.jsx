import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PostForm from './components/PostForm';
import PostAll from './components/PostAll';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    

    this.setState({ posts: res.data });
  };

  submitHandler = async e => {
    //Handle the submit event in Postform
    //console.log(e.target.post.value)
    e.preventDefault()
    const res = await axios({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data:{
        title:e.target.title.value,
        body:e.target.post.value
      }
    })
    const posts_ = this.state.posts
    posts_.unshift(res.data);    
    console.log(res.data)

    this.setState({
      posts: posts_
    })
  }

  render() {
    const {posts} = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h4 className='display-4'>React-Redux Post</h4>{' '}
        </header>
        <div>
          <PostForm submitHandler={this.submitHandler}/>
        </div>
        <hr />
        <div>
          <PostAll posts={posts} />
        </div>
      </div>
    );
  }
}

export default App;
