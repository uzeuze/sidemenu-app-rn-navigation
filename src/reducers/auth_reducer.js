import { AUTH_USER, UNAUTH_USER } from '../actions/types';

const INITIAL_STATE = {
  isAuth: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, isAuth: true };
    case UNAUTH_USER:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
