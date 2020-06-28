import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './secrets-page.styles.scss';
import { signOutStart } from '../../../redux/user/user.action';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

class SecretPage extends Component {
  render() {
    const { signOutStart, history } = this.props;
    return (
      <div>
        <div className='secret'>
          {this.props.currentUser ? (
            <p className='secret-text'>
              {`Welcome ${this.props.currentUser.email}, you are successfully authenticated. The secret is 123!`}
            </p>
          ) : (
            <p className='secret-text'>
              Sorry, you are not authenticated. Please sign in or sign up.
            </p>
          )}
        </div>
        {this.props.currentUser ? (
          <div className='secret-button'>
            <Button onClick={() => signOutStart(history)} size='lg'>
              Sign Out
            </Button>
          </div>
        ) : (
          <div className='secret-button'>
            <LinkContainer to='/'>
              <Button size='lg' variant='link'>
                Home Page
              </Button>
            </LinkContainer>
          </div>
        )}
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
