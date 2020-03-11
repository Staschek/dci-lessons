import React, { Component } from 'react';

class TitleHeader extends Component {
  state = {
    title: ''
  };
  static getDerivedStateFromProps(props, state) {
    if (state.title !== props.newTitle) {
      return {
        title: props.newTitle
      };
    } else {
      return null;
      // do nothing
    }
  }
  render() {
    return <h1>{this.state.title}</h1>;
  }
  componentDidMount() {
    let header = document.querySelector('h1');
    header.style.background = 'orange';
  }

  componentDidUpdate() {
    let header = document.querySelector('h1');
    header.style.background = 'darkred';
  }

  componentWillUnmount() {
    alert('component will unmount');
    this.setState({
      title: ''
    });
  }
}

export default TitleHeader;
