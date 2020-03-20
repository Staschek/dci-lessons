import React, { Component } from 'react';

export class Formin extends Component {
  state = {
    email: '',
    password: ''
  };
  messageApp = () => {
    // this.props.messageEmail(this.state.email);
    // this.props.messagePassword(this.state.password);
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.messageFormin({ [e.target.name]: e.target.value });

    // console.table('props', e.target.name, 'value:', e.target.value);
  };

  render() {
    return (
      <form className='form p-2' onSubmit={this.props.submitHandler}>
        <br />
        <input
          type='text'
          name='email'
          placeholder='Email'
          className='btn-block p-0.5'
          value={this.state.email}
          //this bubbled hoch zur ClassComponent und rein in den changeHandler, wenn der eine Arrowfunction ist
          onChange={this.changeHandler}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='btn-block p-0.5'
          value={this.state.password}
          //this bubbled hoch zur ClassComponent und rein in den changeHandler, wenn der eine Arrowfunction ist
          onChange={this.changeHandler}
        />{' '}
        <br />
        <input type='submit' className='btn btn-light' value='submit' />
      </form>
    );
  }
}

export default Formin;
