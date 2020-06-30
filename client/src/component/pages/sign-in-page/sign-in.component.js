import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from '../../sign-in-form/sign-in-form';
import {
  googleSignInStart,
  facebookSignInStart,
} from '../../../redux/user/user.action';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';

import './sign-in.styles.scss';

class SignInPage extends Component {
  _googleSignInClick = () => {
    window.open('http://localhost:5000/login_google', '_self');
  };
  render() {
    return (
      <div className='signin-page'>
        <SignInForm />
        <div className='buttons'>
          <FacebookLoginButton className='socail-button' />

          <GoogleLoginButton
            className='social-button'
            onClick={this._googleSignInClick}
          />
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   facebookSignInStart: () => dispatch(facebookSignInStart()),
// });

export default connect(null, null)(SignInPage);
