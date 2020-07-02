import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './secrets-page.styles.scss';
import { signOutStart } from '../../../redux/user/user.action';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

class SecretPage extends Component {
  render() {
    const { signOutStart, currentUser, history } = this.props;
    return (
      <div>
        <div className='secret'>
          {currentUser ? (
            <p className='secret-text'>
              {`Welcome ${currentUser.email}, you are successfully authenticated. The secret is 123!`}
            </p>
          ) : (
            <p className='secret-text'>
              Sorry, you are not authenticated. Please sign in or sign up.
            </p>
          )}
        </div>

        <div className='secret-link'>
          <LinkContainer to='/'>
            <Button size='lg' variant='link'>
              Home Page
            </Button>
          </LinkContainer>
        </div>
        {currentUser ? (
          <div className='secret-button'>
            <Button onClick={() => signOutStart(history)} size='lg'>
              Sign Out
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: (history) => dispatch(signOutStart({ history })),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SecretPage)
);
