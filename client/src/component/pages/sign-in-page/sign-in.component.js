import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from '../../sign-in-form/sign-in-form';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';

import './sign-in.styles.scss';

class SignInPage extends Component {
  googleSignInClick = () => {
    window.open('http://localhost:5000/oauth/google', '_self');
  };
  facebookSignInClick = () => {
    window.open('http://localhost:5000/oauth/facebook', '_self');
  };
  render() {
    return (
      <div className='signin-page'>
        <SignInForm />
        <div className='buttons'>
          <FacebookLoginButton
            className='socail-button'
            onClick={this.facebookSignInClick}
          />

          <GoogleLoginButton
            className='social-button'
            onClick={this.googleSignInClick}
          />
        </div>
      </div>
    );
  }
}

export default SignInPage;
