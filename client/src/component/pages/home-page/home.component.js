import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import './home.styles.scss';

class HomePage extends Component {
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HomePage);
