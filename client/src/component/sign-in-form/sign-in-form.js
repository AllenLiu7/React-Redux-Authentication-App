import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailSignInStart } from '../../redux/user/user.action';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './sign-in-form.styles.scss';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
    validated: false,
    error_message: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart, history } = this.props;
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });

    emailSignInStart(email, password, history);
  };
  render() {
    return (
      <div className='signin-form'>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              placeholder='Enter Email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              Please enter an email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type='password'
              name='password'
              placeholder='Enter Password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              Please enter a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
          <p className='alert'>{this.state.error_message}</p>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password, history) =>
    dispatch(emailSignInStart({ email, password, history })),
});

export default withRouter(connect(null, mapDispatchToProps)(SignInForm));
