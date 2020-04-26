import React from 'react';
import { connect } from 'react-redux';

const Register = (props) => {
  return (
    <div className='container register-form'>
      <form onSubmit={setRedirect} className='form'>
        <div className='note'>
          <p>You are going to be so fuckin rich.</p>
        </div>

        <div className='form-content'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='firstName'
                  className='form-control'
                  placeholder='First Name *'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='lastName'
                  className='form-control'
                  placeholder='Last Name*'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='skiils'
                  className='form-control'
                  placeholder='Skills*'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='gitHubUser'
                  className='form-control'
                  placeholder='githubusername*'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='bio'
                  className='form-control'
                  placeholder='Bio*'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='password'
                  name='password'
                  className='form-control'
                  placeholder='Password *'
                  defaultValue=''
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='email'
                  className='form-control'
                  placeholder='Email *'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='company'
                  className='form-control'
                  placeholder='Company *'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='website'
                  className='form-control'
                  placeholder='Website *'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='location'
                  className='form-control'
                  placeholder='Location *'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='youtube'
                  className='form-control'
                  placeholder='Youtube *'
                  defaultValue=''
                />
              </div>
              <div className='form-group'>
                <input
                  onChange={handleChange}
                  type='text'
                  name='phone'
                  className='form-control'
                  placeholder='Phone *'
                  defaultValue=''
                />
              </div>
            </div>
          </div>
          <button type='submit' className='btnSubmit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.users.text,
  users: state.users.users,
});

export default connect(mapStateToProps, {
  handleChange,
  setRedirect,
})(Register);
