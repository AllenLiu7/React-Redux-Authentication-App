import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './component/pages/home-page/home.component';
import SignInPage from './component/pages/sign-in-page/sign-in.component';
import SignUpPage from './component/pages/sign-up-page/sign-up.component';
import SecretPage from './component/pages/secrests-page/secrets-page.component';

import { checkUserSession } from '../src/redux/user/user.action';

import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.checkUserSession();
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/secrets' component={SecretPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
