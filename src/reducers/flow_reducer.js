import { SET_CURRENT_SCREEN } from '../actions/types';

const INITIAL_STATE = {
  screen: 'Home',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_SCREEN:
      return { ...state, screen: action.payload };
    default:
      return state;
  }
};
