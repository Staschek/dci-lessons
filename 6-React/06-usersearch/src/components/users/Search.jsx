import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
    // clear: false
  };

  static propTypes = {
    searchValue: PropTypes.func.isRequired,
    clearHandler: PropTypes.func.isRequired
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  subimtHandler = e => {
    e.preventDefault();
    this.props.searchValue(this.state.text);
    this.setState({ text: '' });
  };

  clearHandler = () => {
    // this.setState({ clear: true });
    this.props.searchClear(this.state.clear);
  };
  render() {
    return (
      <form onSubmit={this.subimtHandler} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users ...'
          className='btn-block p-0.5'
          value={this.state.text}
          //this bubbled hoch zur ClassComponent und rein in den changeHandler, wenn der eine Arrowfunction ist
          onChange={this.changeHandler}
        />
        <input
          className='btn btn-dark btn-block'
          type='submit'
          value='Search'
        />
        {this.props.clearApear && (
          <input
            className='btn btn-light btn-block'
            type='button'
            value='Clear'
            onClick={this.clearHandler}
          />
        )}
      </form>
    );
  }
}

export default Search;
