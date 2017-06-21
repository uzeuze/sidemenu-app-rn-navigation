import { combineReducers } from 'redux';
import auth from './auth_reducer';
import flow from './flow_reducer';

const rootReducer = combineReducers({
  auth,
  flow
});

export default rootReducer;
