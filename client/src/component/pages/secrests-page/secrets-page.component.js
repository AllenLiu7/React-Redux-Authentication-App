import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkUserSession } from '../../../redux/user/user.action';

class SecretPage extends Component {
  componentDidMount() {
    this.props.checkUserSession();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.currentUser ? <p>Log in</p> : <p>unautheriazed</p>}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SecretPage);
