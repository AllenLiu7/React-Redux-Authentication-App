import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './component/pages/home-page/home.component';
import SignInPage from './component/pages/sign-in-page/sign-in.component';
import SignUpPage from './component/pages/sign-up-page/sign-up.component';
import SecretPage from './component/pages/secrests-page/secrets-page.component';
import './App.scss';

function App() {
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

export default App;
