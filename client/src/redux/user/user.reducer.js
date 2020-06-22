import UserActionTypes from './user.type';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
