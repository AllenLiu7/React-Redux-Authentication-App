import { call, takeLatest, all, put } from 'redux-saga/effects';
import axios from 'axios';

import UserActionTypes from './user.type';
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
} from './user.action';

export function* emailSignInAsync({ payload: { email, password, history } }) {
  try {
    const response = yield axios.post('http://localhost:5000/login', {
      email,
      password,
    });
    yield put(signInSuccess({ user: response.data }));
    history.push('/secrets');
  } catch (error) {
    yield put(signInFailure(error));
    history.push('/login');
  }
}

export function* signOutAsync() {
  try {
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

//-----------------watcher-----------------

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutAsync);
}

export function* userSagas() {
  yield all([call(onEmailSignInStart), call(onSignOutStart)]);
}
