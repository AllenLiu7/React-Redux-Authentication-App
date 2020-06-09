import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './component/pages/home-page/home.component';
import SignInPage from './component/pages/sign-in/sign-in.component';
import SignUpPage from './component/pages/sign-up/sign-up.component';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
