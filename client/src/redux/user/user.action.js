import UserActionTypes from './user.type';

export const emailSignInStart = (emailandpassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailandpassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
