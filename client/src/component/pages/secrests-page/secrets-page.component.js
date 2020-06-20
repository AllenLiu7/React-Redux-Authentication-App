import React, { Component } from 'react';
import axios from 'axios';

class SecretPage extends Component {
  state = { currentUser: null };
  render() {
    return (
      <div>
        <div>
          {this.state.currentUser ? <p>Log in</p> : <p>unautheriazed</p>}
        </div>
      </div>
    );
  }
}

export default SecretPage;
