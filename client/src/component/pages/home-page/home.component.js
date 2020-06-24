import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import './home.styles.scss';

import {
  checkUserSession,
  signOutStart,
} from '../../../redux/user/user.action';

class HomePage extends Component {
  componentDidMount() {
    //this.props.checkUserSession();
  }

  render() {
    return (
      <div className='home'>
        <div className='home__title'>Secret Box</div>
        <div className='home__buttons'>
          <div className='home__button'>
            <LinkContainer to='/signin'>
              <Button size='lg'>Log in</Button>
            </LinkContainer>
          </div>
          <div className='home__button'>
            <LinkContainer to='/signup'>
              <Button size='lg'>Sign up</Button>
            </LinkContainer>
          </div>
          <div className='home__button'>
            <LinkContainer to='/secrets'>
              <Button size='lg'>Show Secrets</Button>
            </LinkContainer>
          </div>
          <div
            className='home__button'
            onClick={() => this.props.signOutStart()}
          >
            <Button size='lg'>Log Out</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
