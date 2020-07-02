import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signUpStart } from '../../redux/user/user.action';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './sign-up-form.styles.scss';

class SignUpform extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error_message: '',
    validated: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = this.state;
    const { history, signUpStart } = this.props;
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart(email, password, history);
  };

  render() {
    const {
      email,
      password,
      confirmPassword,
      validated,
      error_message,
    } = this.state;
    return (
      <div className='sign-up-form'>
        <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              placeholder='Enter Email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              Please enter a username.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              Please enter password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Comfirm Password</Form.Label>
            <Form.Control
              required
              type='password'
              name='confirmPassword'
              placeholder='Password'
              value={confirmPassword}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type='invalid'>
              Please enter password again.
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant='primary' type='submit'>
            Register
          </Button>
          <p className='alert'>{error_message}</p>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, history) =>
    dispatch(signUpStart({ email, password, history })),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUpform));
