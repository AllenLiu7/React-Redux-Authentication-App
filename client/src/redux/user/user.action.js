import UserActionTypes from './user.type';

export const emailSignInStart = (emailandpassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: { emailandpassword },
});
