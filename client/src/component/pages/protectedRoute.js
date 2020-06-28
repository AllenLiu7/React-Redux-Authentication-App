import React from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const currentUser = this.props.currentUser;

    return currentUser ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  }
}

export default ProtectedRoute;
