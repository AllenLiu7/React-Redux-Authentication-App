import React, { Component } from 'react';
import axios from 'axios';

class SecretPage extends Component {
  state = { currentUser: null };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const response = await axios.get('http://localhost:5000/login_success');
    const data = response.data;
    this.setState({ currentUser: data });
  };

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
