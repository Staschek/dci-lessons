import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  //not working. need to send props from stateless component to app.jsx
  // closeHandler = () => {
  //   this.props.closeEvent({ alert: null });
  // };
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className={'fas fa-info-circle'} /> {alert.msg}
        <div className='close right' onClick={this.closeHandler}>
          x
        </div>
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.object.isRequired
};
export default Alert;
