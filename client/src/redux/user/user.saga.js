import { call, takeLatest, all, put } from 'redux-saga/effects';
import axios from 'axios';

import UserActionTypes from './user.type';
import { signInSuccess, signInFailure } from './user.action';

export function* emailSignInAsync({ payload: { email, password } }) {
  try {
    // axios
    //   .post('http://localhost:5000/login', {
    //     email,
    //     password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     this.props.history.push('/secrets');
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data.error);
    //     this.setState({ error_message: err.response.data.error });
    //     this.props.history.push('/signin');
    //   });

    const response = yield axios.post('http://localhost:5000/login', {
      email,
      password,
    });
    yield put(signInSuccess({ user: response }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

//-----------------watcher-----------------

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync);
}

export function* userSagas() {
  yield all([call(onEmailSignInStart)]);
}
