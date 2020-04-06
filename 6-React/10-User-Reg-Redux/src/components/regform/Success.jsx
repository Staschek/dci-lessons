import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <h1>Thank you for your submission</h1>
          <p>You will get an email with futher instructions</p>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
