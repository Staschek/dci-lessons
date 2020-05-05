import React, { useState } from 'react';
import { Form, Col, Button, InputGroup } from 'react-bootstrap';

const FormUserDetails = (props) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <h4>Register to learn anything!</h4>
      <br />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md='6' controlId='validationCustomUsername'>
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type='text'
                placeholder='Username'
                aria-describedby='inputGroupPrepend'
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md='6' controlId='validationCustom01'>
            <Form.Label>Password</Form.Label>
            <Form.Control required type='password' placeholder='Password' />
            <Form.Control.Feedback>Password</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md='6' controlId='validationCustom01'>
            <Form.Label>First name</Form.Label>
            <Form.Control required type='text' placeholder='First name' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='6' controlId='validationCustom02'>
            <Form.Label>Last name</Form.Label>
            <Form.Control required type='text' placeholder='Last name' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md='6' controlId='validationCustom03'>
            <Form.Label>City</Form.Label>
            <Form.Control type='text' placeholder='City' required />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='3' controlId='validationCustom04'>
            <Form.Label>State</Form.Label>
            <Form.Control type='text' placeholder='State' required />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='3' controlId='validationCustom05'>
            <Form.Label>Zip</Form.Label>
            <Form.Control type='text' placeholder='Zip' required />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label='Agree to terms and conditions'
            feedback='You must agree before submitting.'
          />
        </Form.Group>
        <Button type='submit'>Submit form</Button>
      </Form>
    </>
  );
};

// const style = {
//   button: {
//     margin: 15
//   }
// };

export default FormUserDetails;
